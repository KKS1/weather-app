const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const weather = require('./api/weather');

const port = 3000;
const errMsg = 'Something went wrong. Please try later!';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, resp) => {
  if (req.error || resp.error) {
    resp.end(errMsg);
  } else {
    resp.render('index');
  }
});

app.post('/', async (req, resp) => {
  const { city } = req.body;
  const weatherData = await weather.getWeather({ city });
  if (!weatherData || !weatherData.main) {
    resp.render('index', { weather: null, error: errMsg });
  } else {
    const { name, main } = weatherData;
    const { temp } = main;
    resp.render('index', { weather: `Its ${temp} degrees in ${name}` });
  }
});

app.listen(port, () => {
  console.log(`weather app started on port ${port}`);
});
