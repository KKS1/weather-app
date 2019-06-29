const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, resp) => {
  if (req.error || resp.error) {
    resp.end('Something went wrong. Please try later!');
    return;
  } else {
    resp.render('index');
  }
});

app.listen(port, () => {
  console.log(`weather app started on port ${port}`);
});
