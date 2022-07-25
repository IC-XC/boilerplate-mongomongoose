require('dotenv').config();



//To-Do # 1: Install & Set up mongoose */

let uri = 'mongodb+srv://Per:<password>@cluster0.4ch8y.mongodb.net/?retryWrites=true&w=majority');
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


//To-Do # 2: Create a Model
const Schema = mongoose.Schema;

let personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
let Person = mongoose.model('Person', personSchema);






/* 3) Create and Save a Record of a Model*/

const Person = mongoose.model("Person", personSchema);
const createAndSavePerson = (done) => {
  let Virg = new Person({ 
    name: 'Virg',
    age: 62,
    favoriteFoords: ['Milk', 'Butter', 'Cheese', 'Eggs', 'Apricots']
  })



const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

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
