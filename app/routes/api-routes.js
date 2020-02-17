//GET route for getting all "To Dos".
app.get('/api/todos', function(req, res) {
  //Write a function that returns all entries and returns them as
  // as an argument inside of the callback function
  //
  // WRITE YOUR CODE HERE
  //
  //
});

// POST route for saving a new todo
app.post('/api/todos', function(requ, res) {
  console.log(req.body);
  // Write a function that takes an argument of an object and inserts it in the DB.
  // Remember, the "create" method describes the item we
  // want to insert into our table.  In this case, we just pass in an object
  // with a text and complete property (req.body)
  //
  // WRITE YOUR CODE HERE
  //
  //
});

// PUT route for updating todos. We can get the updated todo data from req.body
app.put('/api/todos', function(req, res) {
  // Write a function that takes an argument of an object and updates the DB.
  // Remember, the "update" method describes the item we
  // want to update in our table, and
  // we use "where" to describe which objects we want to update
  //
  // WRITE YOUR CODE HERE
  //
  //
});

// DELETE route for deleting todos. We can get the id of the todo to be deleted from
// req.params.id
app.delete('/api/todos/:id', function(req, res) {
  // Write a function that deletes an item in the DB.
  // Remember, the "destroy" method needs you to specify
  // which todo we want to destroy with "where"
  //
  // WRITE YOUR CODE HERE
  //
  //
});
