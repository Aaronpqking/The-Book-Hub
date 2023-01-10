const db = require('../config/connection');
const  Book  = require('../models');
const { User } = require('../models/user');
const bookSeeds = require('./bookSeeds.json');
const userSeeds = require('./usersSeeds.json');



db.once('open', async () => {
  await Book.Book.deleteMany({});
  await Book.Book.create(bookSeeds);
  await Book.User.deleteMany({});
  await Book.User.create(userSeeds);
  
  console.log('all done!');
  process.exit(0);
});
db.books.find({title: "The Alchemist"}).pretty()


