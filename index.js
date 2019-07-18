'use strict';

const mongoose = require('mongoose');
const Categories = require ('./data-modeling/models-modular/categories/categories')
// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI);
let food = new Categories();
food.create({name:'Apple', description: 'fruit'})
    .then(fooditem => console.log(fooditem))
    .catch(console.error);
// Do some work

// Disconnect
mongoose.disconnect();