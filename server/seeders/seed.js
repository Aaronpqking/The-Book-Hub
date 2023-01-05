const db = require('../config/connection');
const  Book  = require('../models');
const { User } = require('../models/user');
const bookSeeds = require('./bookSeeds.json');
const userSeeds = require('./usersSeeds.json');



db.once('open', async () => {
  await db.collection.deleteMany({});
  await db.collection.create(bookSeeds);

  console.log('all done!');
  process.exit(0);
});


