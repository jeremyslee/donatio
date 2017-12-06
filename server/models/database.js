require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

const pgp = require('pg-promise')();

const db = {}

db.conn = pgp(connectionString);

module.exports = db;
