require('dotenv').config();


//To-Do # 1: Install & Set up mongoose */

let uri = 'mongodb+srv://Per:Hunedoara@cluster0.4ch8y.mongodb.net/db-fcc?retryWrites=true&w=majority';
let mongoose = require('mongoose');
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


//To-Do # 2: Create a Model */

const Schema = mongoose.Schema;
let personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
let Person = mongoose.model('Person', personSchema);


//To-Do # 3: Create and Save a Record of a Model */

const createAndSavePerson = (done) => {
  let ICXC = new Person({
    name: "ICXC",
    age: 00,
    favoriteFoods: ["eggs", "fish", "fresh fruit"]
  });

  ICXC.save(function(err, data){
    if(err) return console.log(err);
    done(null, data)
  });
};


//To-Do # 4: Create Many Records with model.create() */

const arrayOfPeople = [
  {name: 'Adams', age: 32, favoriteFoods: ['paella', 'rice', 'cereal']},
  {name: 'Baker', age: 33, favoriteFoods: ['tacos', 'hummus', 'croissant']},
  {name: 'Clark', age: 34, favoriteFoods: ['ham', 'lasagna', 'lobster']},
  {name: 'Davis', age: 35, favoriteFoods: ['chicken', 'sushi', 'ice cream']}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, people){
    if(err) return console.log(err);
    done(null, people)
  });
};


//To-Do # 5: Use model.find() to Search Your Database */





const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
