# MongoDB CLI


## Let's review basic commands

## How to create a collection
1. Start up a new Database by switching to it

* **note** The Database doesn't exist until you create a collection

```
$ use lesson_db
```

## Show the current Database by running:

```
$ db
```

## How to Insert documents (The C in CRUD)
* Insert data into the lesson_db Database using this command:
* **note** This will create the collection automatically
* (additional note) The contents of the insert are basically a JavaScript object, and include an array

```
$ db.places.insert({"continent": "Africa", "country":"Morocco", "majorcities": ["Casablanca", "Fez", "Marrakech"]})
```

## Finding docs (The R In CRUD)
* Find all data in a Collection using `db.[COLLECTION_NAME].find()`
* **note** The MongoDB `_id` was created automatically
* The `_id` is specific for each Document in the Collection

`$ db.places.find()`

### Make your results "pretty"
`$ db.places.find().pretty()`


### Find specific data by matching a field
`$ db.places.find({ "continent": "Africa" })`

`$ db.places.find({ "country": "Morocco" })`

### Find specific data by matching an `_id`

`$ db.places.find({ _id: [COPY OBJECTID FROM THE PREVIOUS FIND RESULTS] })`

* Example: `$ db.places.find({_id: ObjectId("5416fe1d94bcf86cd785439036")})`

## Updated (The U in CRUD)
* We update using `$ db.[COLLECTION_NAME].update()`

`$ db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}})`

* **note** The above will only update the first entry it matches

### How do I update multiple entries?
* Just add `{multi: true}`

`$ db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}}, {multi: true})`

## Quiz Question
* What will happen with I run the following command, even though there is not a `capital` field in the document?

`$ db.places.update({"country": "Morocco"}, {$set: {"capital": "Rabat"}})`

### Answer
* `$set` will create the field `capital`
* The newly created field can now be updated with the same command

`$ db.places.update({"country": "Morocco"}, {$set: {"capital": "RABAT"}})`

### How do we update the values in an array?
* Answer: using `push`

`$ db.places.update({"country": "Morocco"}, {$push: {"majorcities": "Agadir"}})`

## Deleting (The D in CRUD)
* We delete an entry with `$ db.[COLLECTION_NAME].remove()`

`$ db.places.remove({ "country": "Morocco" })`

* We can also empty a collection with by passing it an empty object

`$ db.places.remove({})`

## How do I drop a collection?
* `$ db.[COLLECTION_NAME].drop()`

`$ db.places.drop`

## How do I drop a database?

`$ db.dropDatabase()`

## A little info about Mongoose
* We are not going to use Mongoose in this Catchup session but I want to say a little about it
* Mongo is very flexible, and makes is easy to save and retrieve data
* But sometimes we need to be stricter
* Sometimes, we want to combine 2 collections for information
* MySQL make that possible with "joins" but how do we do that with MongoDB?

### Mongoose is going to allow us to create joins in MongoDB
* Stay tuned as we dive deeper into Mongoose in our upcoming classes

### Return to master branch for last activity
 
