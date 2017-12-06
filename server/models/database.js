require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

const pgp = require('pg-promise')();

const db = pgp(connectionString);

module.exports = db;
