const db = require('../models/database');
const User = require('../models/userModel');

const forgotController = {
    forgotPassword(req, res, next) {
        const query = `SELECT * FROM "user" WHERE email = '${req.body.email}'`;
        db.conn.one(query)
            .then(forgotController => {
                    res.status(200).send({ 'msg': 'User is in DB' });
                    next()
            })
            .catch(err => {
                console.log('The error is', err);
                res.status(404).send(err)
            });
    },
    // createRandomToken(user, done, next) {
    //     crypto.randomBytes(20, function(err, buffer) {
    //       const token = buffer.toString('hex');
    //       done(err, user, token)
    //       next()
    //     });
    // },
    // replacePassword(user, token, done, next) {

    // }
}
module.exports = forgotController;
