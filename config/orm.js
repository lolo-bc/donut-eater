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

  create: function(tableName, colNames, values, cb) {
    isEaten = false;
    // console.log(newBorger, burgerName, isEaten);
    var newBorger = "INSERT INTO " + tableName + "(" + colNames + ")" + "VALUES (?,?)";

    connection.query(newBorger, values, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  update: function(condition, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE ";
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
