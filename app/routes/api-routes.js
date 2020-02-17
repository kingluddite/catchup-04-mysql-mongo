// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Example = require('../models/Example.js');

// Routes
// =============================================================
module.exports = function(app) {
  // Get all examples
  app.get('/api/all', function(req, res) {
    // Finding all Examples, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Example.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add an example
  app.post('/api/new', function(req, res) {
    console.log('Example Data:');
    console.log(req.body);

    Example.create({
      exampleEntry01: req.body.exampleEntry01,
      exampleEntry02: req.body.exampleEntry02,
      exampleEntry03: req.body.exampleEntry03,
    }).then(function(results) {
      // `results` here would be the newly created example
      console.log(results);
      res.end();
    });
  });
};
