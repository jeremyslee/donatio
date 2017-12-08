const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const charityController = require('./controllers/charityController');
const logger = require('morgan');
const scrapeController = require('./scraper');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const path = require('path')
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const app = express();

const PUBLIC_DIR = path.join(__dirname, "../public");
app.use(express.static(PUBLIC_DIR));

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

app.use(logger('short'));


app.get("/", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
  console.log('Cookies: ', req.cookies);
})

app.post('/login', userController.postLogin)

app.post('/signup', userController.createUser)

app.get('/getCharityInfo', charityController.getCharityInfo)

app.post('/purchaseHistory', charityController.getPurchaseHistory)

app.get('/crawler', scrapeController.scrapeCharity)

app.use((req, res) => {
  res.status(404);
  res.send('File not found!');
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});
