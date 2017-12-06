const express = require('express');
const bodyParser = require('body-parser');
const eventController = require('./controllers/eventController');
const logger = require('morgan');
const scrapeController = require('./scraper');

const path = require('path')
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const app = express();

const PUBLIC_DIR = path.join(__dirname, "../public");
app.use(express.static(PUBLIC_DIR));

app.use(bodyParser.json());

app.use(logger('short'));

const newLocal = app.get;

app.get("/", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'))
})

app.post('/createUser', eventController.createUser);

app.post('/login', (req, res) => {
  console.log('user is logged in')
  res.status(200).send('OK')
})

app.post('/signup', (req, res) => {
  console.log('sign up')
  res.status(200).send('OK')
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
