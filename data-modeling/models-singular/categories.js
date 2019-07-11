'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const schema = require('./categories-schema.js')

class Categories {

  constructor() {
  }

  get(_id) {
    if(_id){
      return schema.findOne({_id});
    }
    else{
      return schema.find({});
    }
//My notes
    //.findOne() is a built-in of mongod
       //returns one document that satisfies the specified query on the collection
    //.find() is a built-in of mongod
      //returns selects documents in a collection to the clinet to choose.
      //might find simlar items of the query. 

//starter code notes
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
  }

  create(record) {
    let newRecord = new schema(record);
    return newRecord.save()
//My Notes
    // .save() is a built in of mongod and it function is to updates an existing document or inserts a new document
//Starter Code notes
    // Call the appropriate mongoose method to create a new record
  }

  update(_id, record) {
    return schema.findByIdAndUpdated(_id,record,{new:true});
//My notes 
    //the findOneAndUpdate =Updates a single document based on the filter and sort criteria.
//Starter Code Note
    // Call the appropriate mongoose method to update a record
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
//My Notes
    //FindOneAndDelete() =Deletes a single document based on the filter and sort criteria, returning the deleted document.
//starter code note    
    // Call the appropriate mongoose method to delete a record
  }

}

module.exports = Categories;
