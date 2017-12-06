const db = require('../models/database');
const User = require('../models/userModel');

const userController = {
    postLogin(req, res, next) {
        const query = `SELECT * FROM "user" WHERE username = '${req.body.usernameLogin}' AND password = '${req.body.passwordLogin}'`;
        db.conn.one(query)
            .then(postLogin => {
                console.log("id:", postLogin.user_id)
                res.status(200).send({ 'msg': 'Login successful', 'id': `${postLogin.user_id}` });
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

        let query = {
            text: 'INSERT INTO "user" (email, username, password, first_name, last_name) VALUES($1, $2, $3, $4, $5)',
            values: [newUser.email, newUser.username, newUser.password, newUser.first_name, newUser.last_name]
        };
        db.conn.none(query)
            .then(createUser => {
                res.status(200).send({ 'msg': 'User created!'});
            })
            .catch(err => {
                console.log('The error is', err);
                res.status(404).send(err)
            });
    }

}
module.exports = userController;
