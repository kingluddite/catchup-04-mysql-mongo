// add dependencies
var mysql = require('mysql');
const express = require('express');
// did you install express?  because we need it and we add it here
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
connection.connect(function(err) {
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
// will show all dogs
app.get('/api/dogs', function(req, res) {
  connection.query('SELECT * FROM Dogs', function(err, data) {
    if (err) throw res.json(err);
    res.json(data);
  });
});

// api/dogs/:breed
// will show dogs of a particular breed
app.get('/api/dogs/:breed', function(req, res) {
  connection.query(
    'SELECT * FROM Dogs WHERE breed = (?)',
    // we grab the parameter from our URL and add it into the SQL
    [req.params.breed],
    function(err, data) {
      // we show an error if there is one
      if (err) throw res.json(err);
      // or we return the result as json in our reponse
      res.json(data);
    }
  );
});

// make sure we listen for requests and let the terminal show which port we are listening on
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
