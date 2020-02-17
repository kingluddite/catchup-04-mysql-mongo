// add dependencies
var mysql = require('mysql');

// create mysql connection
// add your username and password specific to your local machine
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306, // this is the standard port for mysql
  // Your username
  user: 'root',
  // Your password
  password: 'password',
  database: 'FosterAgency', // this is our Database we just created
});

connection.connect(function(err) {
  // first check if we have any connection errors
  if (err) throw err;

  // time to query our Database
  // We write some basic SQL to select all dogs from our Dogs table
  connection.query('SELECT * FROM Dogs', function(err, res) {
    // in our callback function (which we run after we get our results back from our db)
    // if any errors from our query show them
    if (err) throw err;
    // log out our SQL query result
    console.log(res);
  });
  // log out the thread id (notice this info comes before our Database info because of async call to Database)
  console.log('connected as id ' + connection.threadId);
});
