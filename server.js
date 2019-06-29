const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, resp) => {
  if (req.error || resp.error) {
    resp.end('Something went wrong. Please try later!');
    return;
  } else {
    resp.render('index');
  }
});

app.post('/', (req, resp) => {
  resp.render('index');
  console.log(req.body.city);
});

app.listen(port, () => {
  console.log(`weather app started on port ${port}`);
});
