# MySQL connection
## Error
* If you get this [error](https://i.imgur.com/zWEPUCT.png):
  - Here is the [solution](https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server):

## Create a connection file
`server.js`

```javascript
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: '',
  // Your password
  password: '',
  database: 'FosterAgency'
});
connection.connect(function(err){
  if(err) throw err;
  console.log("connected as id "+ connection.threadId);
});
```

## Let's analyze our server.js
* What npm modules do we need to install?
* What Database connection info do we need to supply?
* Read comments

## How do we install npm modules?
* Create package.json

`$ npm init`

* Shortcut

`$ npm init -y`

## Install dependencies
* How do we install dependencies?

`$ npm install mysql`

* Shortcut

`$ npm i`

## Run file
`$ node server.js`

* Shortcut

`$ node server`

* `Nodemon` saves time so you don't have to keep restarting server with every change

`$ nodemon server`

### Exit terminal
`ctrl` + `c`

## Show output in terminal

## Return to slidehow
* Show Terminal Output slide

* Checkout 03-get-route-question

`$ git checkout 03-get-route-question`
