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
    }
}
module.exports = forgotController;
