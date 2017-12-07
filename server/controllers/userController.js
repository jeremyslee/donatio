const db = require('../models/database');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {
    postLogin(req, res, next) {
        const query = `SELECT * FROM "user" WHERE username = '${req.body.usernameLogin}'`;
        db.conn.one(query)
            .then(postLogin => {
                if (bcrypt.compareSync(req.body.passwordLogin, postLogin.password)) {
                    res.status(200).send({ 'msg': 'Login successful', 'id': `${postLogin.user_id}`  });
                }else {
                    console.log('Password dont match')
                }
            })
            .catch(err => {
                console.log('The error is', err);
                res.status(404).send(err)
            });
    },
    createUser(req, res, next) {
        let newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            first_name: req.body.firstname,
            last_name: req.body.lastname,
        });


        bcrypt.hash(req.body.password, 10, function (err, hash) {
            let query = {
                text: 'INSERT INTO "user" (email, username, password, first_name, last_name) VALUES($1, $2, $3, $4, $5)',
                values: [newUser.email, newUser.username, hash, newUser.first_name, newUser.last_name]
            }
            db.conn.none(query)
                .then(createUser => {
                    res.status(200).send({ 'msg': 'User created!' });
                })
                .catch(err => {
                    console.log('The error is', err);
                    res.status(404).send(err)
                });
        })
    }
}
module.exports = userController;
