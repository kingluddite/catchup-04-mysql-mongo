# Review some Sequelize code
* In this sample `connection.js` code, we require the Sequelize package, and use it to create a connect to our Database, (very similar to how we use the MySQL package)
* Note how we first require the Sequelize library, and then the connection that we will use to connect to the Database (Sequelize with a lowercase "s")
* Analyze the `package.json` to see what dependencies we need to install

## Install Express, mysql2 and Sequelize

`$ npm i`

## Body data for Postman
* http://localhsot:8080/api/new
* POST http verb method
* Body tab in Postman, raw and JSON (application/json)

## Run server
`$ nodemon server`

```
{
  "exampleEntry01": "First example",
  "exampleEntry02": 1984,
  "exampleEntry03": "2020-02-16T20:40:00.632Z"
},
{
  "exampleEntry01": "second example",
  "exampleEntry02": 1999,
  "exampleEntry03": "2020-02-16T20:40:00.632Z"
},
{
  "exampleEntry01": "third example",
  "exampleEntry02": 2008,
  "exampleEntry03": "2020-02-16T20:40:00.632Z"
}
```

## View terminal
* Will show output
* View data in MySQL Workbench

## MySQL Workbench
* Export seed data as .sql

`seed.sql`

```
INSERT INTO `examples` (`exampleEntry01`,`exampleEntry02`,`exampleEntry03`,`createdAt`,`updatedAt`) VALUES ('First example',1984,'2020-02-16 20:40:00','2020-02-17 21:12:07','2020-02-17 21:12:07');
INSERT INTO `examples` (`exampleEntry01`,`exampleEntry02`,`exampleEntry03`,`createdAt`,`updatedAt`) VALUES ('second example',1999,'2020-02-16 20:40:00','2020-02-17 21:12:26','2020-02-17 21:12:26');
INSERT INTO `examples` (`exampleEntry01`,`exampleEntry02`,`exampleEntry03`,`createdAt`,`updatedAt`) VALUES ('third example',2008,'2020-02-16 20:40:00','2020-02-17 21:12:31','2020-02-17 21:12:31');
```

### Return to slides
