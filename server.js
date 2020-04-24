var mysql = require('mysql');
const express = require('express');
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db connection info
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'FosterAgency',
});

// connect to db using connection info
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// routes
// home page
app.get('/', (req, res) => res.send('Hello World!'));

// /api/dogs
app.get('/api/dogs', function (req, res) {
  connection.query('SELECT * FROM Dogs', function (err, data) {
    if (err) throw res.json(err);
    res.json(data);
  });
});

// api/dogs/:breed
app.get('/api/dogs/:breed', function (req, res) {
  // INSERT CODE HERE
  // Complete the empty get by breed route
  // When this route is hit, it will show all dogs of a particular breed
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
