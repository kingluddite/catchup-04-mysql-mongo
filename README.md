# GET Route
* Review the solution

```javascript
// MORE CODE

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
// MORE CODE
```
## Return to slideshow
* Let's talk about Sequelize
