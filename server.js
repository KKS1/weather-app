const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const weather = require('./api/weather');

const port = process.env.PORT || 3001;
const errMsg = 'Something went wrong. Please try later!';

// app.set('view engine', 'ejs');
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/get-weather', async (req, resp) => {
  const { city } = req.body;
  const weatherData = await weather.getWeather({ city });
  if (!weatherData || !weatherData.main) {
    resp.send({ error: errMsg });
  } else {
    const {
      name,
      main: { temp }
    } = weatherData;
    resp.send({ weather: `Its ${temp} degrees in ${name}` });
  }
  resp.end();
});

app.listen(port, () => {
  console.log(`weather app started on port ${port}`);
});
