// GET route for getting all "To Dos"
// This is the R in CRUD
app.get('/api/todos', function(req, res) {
  // findAll() returns all entries for a table when used with no options
  db.Todo.findAll({}).then(function(dbTodo) {
    // We hav access to the todos as an argument inside of the callback function
    res.json(dbTodo);
  });
});

// POST route for saving a new todo
// This is the C in CRUD
app.post('/api/todos', function(req, res) {
  // Let's examine what in the body with a quick log
  console.log(req.body);

  // create() takes an argument of an object describing the item we want to insert
  //  into our table
  // in this case, we just pass in an object with a text and complete proerty (req.body)
  db.Todo.create({
    text: req.body.text,
    complete: req.body.complete,
  }).then(function(dbTodo) {
    // We have access to the new todo as an argument inside of the callback function
    res.json(dbTodo);
  });
});

// PUT route for updating todos
//  This is the U in CRUD
// We can get the updated todo data from req.body
app.put('/api/todos', function(req, res) {
  // Update takes in an object describing the properties we want to update,
  //  and we use WHERE to describe which objects we want to update
  db.Todo.update(
    {
      text: req.body.text,
      complete: req.body.complete,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then(function(dbTodo) {
    res.json(dbTodo);
  });
});

// DELETE route for deleting todos
// This is the D in CRUD
// We can get the id of the todo to be deleted from req.params.id
app.delete('/api/todos/:id', function(req, res) {
  // We just have to specify which todo we want to destroy with "WHERE"
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function(dbTodo) {
    res.json(dbTodo);
  });
});
