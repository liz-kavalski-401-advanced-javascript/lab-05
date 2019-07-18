'use strict';

const Model = require('../mongo.js');
const schema = require('./product-schema.js');

// How can we connect ourselves to the mongo interface?
// What do we export?
class Product extends Model{
    constructor (){
        super();
        this.schema=schema;
    }
}

module.exports = Product;