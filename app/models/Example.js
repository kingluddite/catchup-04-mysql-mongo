// This may be confusing but here Sequelize (capital "S") references the standard library
var Sequelize = require('sequelize');

// sequelize (lowercase "s") references our connect to the Database
var sequelize = require('../config/connection.js');

// Creates an "Example" model that matches up with the Database
// Common Naming convention to begein Models with a capital letter
var Example = sequelize.define('example', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  exampleEntry01: {
    type: Sequelize.STRING,
  },
  exampleEntry02: {
    type: Sequelize.INTEGER,
  },
  exampleEntry03: {
    type: Sequelize.DATE,
  },
  // timestamps: false,
});

// Syncs with Database
Example.sync();

// Makes the Example Model available for other files
module.exports = Example;
