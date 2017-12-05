require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

// const pg = require('pg');

// console.log(pg);

// const db = {};
// const postgresURI = process.env.DATABASE_URL;

// pg.connect(postgresURI, (err, db_) => {
//   if (err) throw new Error(err);
//   db.conn = db_;
// });


///////

// const { Pool, Client } = require('pg');
// const connectionString = process.env.DATABASE_URL;

// const pool = new Pool({
//   connectionString: connectionString
// });

// const client = new Client({
//   connectionString: connectionString
// });

// let db;

// client.connect((err, client) => {
//   if (err) throw new Error(err);
//   db = client;
// });

// console.log('hi', db);

const pgp = require('pg-promise')();

const db = pgp(connectionString);

module.exports = db;
