const express = require('express');
const bodyParser = require('body-parser');
const eventController = require('./controllers/eventController');
const logger = require('morgan');
const scrapeController = require('./scraper');

const app = express();

app.use(bodyParser.json());

// app.use(logger('short'));

// app.use((req, res) => {
//   res.status(404);
//   res.send('File not found!');
// });

app.post('/createUser', eventController.createUser);

app.get('/getCharityInfo', eventController.getCharityInfo);

app.get('/crawler', scrapeController.scrapeCharity)


app.listen(3000, () => {
  console.log('App started on port 3000');
});
