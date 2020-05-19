var connection = require("../config/connection.js");



var orm = {
  all: function(tableName, cb) {
    var queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },

  insertOne: function(tableName, burgerName, isEaten, cb) {
    isEaten = false;
    var newBorger = "INSERT INTO " + tableName +  "( VALUES ?)";

    connection.query(newBorger, burgerName, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  updateOne: function(condition, cb) {
    var queryString = "UPDATE burgers set BOOLEAN false WHERE";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};

module.exports = orm;
