# Review the solutions

## Example Collection:
`$ use classroom`

`$ db.students.insert({name: 'Steve', teammate:'true', hobbies:['Coding', 'Reading', 'Running']})`

## Use find commands to get:

* A list of everyone in your row.

`$ db.students.find({row:3})`

* An entry for a single person.

`$ db.students.find({name:'Steve'})`

## Add Extreme Basketweaving to your array of hobbies.

`$ db.students.update({name: "Steve"}, {$push: {"hobbies":"Extreme Basketweaving"}})`

### Change a student's hobby.

`$ db.students.update({name: "NAME-OF-STUDENT"}, {$set: {hobbies:["Extreme Basketweaving"]}})`

## Remove a student from your database.

`$ db.students.remove({name: "NAME-OF-STUDENT"})`
