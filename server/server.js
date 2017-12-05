const express = require('express');
const bodyParser = require('body-parser');
const eventController = require('./controllers/eventController');
const logger = require('morgan');
const scrapeController = require('./scraper');

const app = express();

app.use(bodyParser.json());

app.use(logger('short'));


app.post('/createUser', eventController.createUser);

app.post('/login', (req, res) => {
  console.log('user is logged in')
})

app.post('/signin', (req, res) => {
  console.log('sign in')
})

app.get('/getCharityInfo', eventController.getCharityInfo);

app.get('/crawler', scrapeController.scrapeCharity)

app.use((req, res) => {
  res.status(404);
  res.send('File not found!');
});


app.listen(3000, () => {
  console.log('App started on port 3000');
});
