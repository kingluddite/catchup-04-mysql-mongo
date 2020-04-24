// QUESTION: How might the route info in `route.js` use this in a GET route?
// This code is just a fragment of code that will not work
// Just think about the question and discuss why it would be used

app.get('/api/dogs', function (req, res) {
  connection.query('SELECT * FROM Dogs', function (err, res) {
    if (err) throw res.json(err);
    res.json(data);
  });
});

app.get('/api/dogs/:breed', function (req, res) {
  connection.query(
    'SELECT * FROM Dogs where breed = (?)',
    [req.body.breed],
    function (err, res) {
      if (err) throw res.json(err);
      res.json(data);
    }
  );
});

// after discussing move into activity 1
