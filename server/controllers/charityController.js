const db = require('../models/database');
const User = require('../models/userModel');

const charityController = {
    getCharityInfo(req, res, next) {
        console.log(req.body)
        const query = 'SELECT * FROM "charity"';
        db.conn.many(query)
                .then(data => {
                    res.send(data)
            })
            .catch(err => {
                console.log('The error is', err);
                res.status(404).send(err)
            });
    },
    getCountries(req, res, next) {
        console.log(req.body)
        const query = 'SELECT DISTINCT "country" FROM "charity"';
        db.conn.many(query)
                .then(data => {
                    res.send(data)
            })
            .catch(err => {
                console.log('The error is', err);
                res.status(404).send(err)
            });
    },
    getCategories(req, res, next) {
        console.log(req.body)
        const query = 'SELECT DISTINCT "category" FROM "charity"';
        db.conn.many(query)
                .then(data => {
                    res.send(data)
            })
            .catch(err => {
                console.log('The error is', err);
                res.status(404).send(err)
            });
    },
    
    getPurchaseHistory(req, res, next) {
      const userId = req.body.userId
      console.log('userId:', userId)
      const query = `SELECT * FROM "donation" WHERE "user_id"=${userId};`;
      db.conn.any(query)
          .then(data => {
              res.send(data)
          })
          .catch(err => {
              console.log('Error', err);
              res.status(404).send(err)
          });
    },
    processPurchase(req, res, next) {
      const userId = req.body.userId
      const amount = req.body.cartTotal
      const query = `INSERT INTO donation(user_id, amount) VALUES (${userId}, ${amount}) RETURNING donation_id;`;
      db.conn.one(query)
          .then(processPurchase => {
              res.send({'id': processPurchase.donation_id})
          })
          .catch(err => {
              console.log('Error', err);
              res.status(404).send(err)
          });
    }
}
module.exports = charityController;
