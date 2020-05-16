const connection = require("../config/connection.js");


const orm = {
  selectAll: function(cb) {
    const queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(burgerName, isEaten, cb) {
    isEaten = false;
    const newBorger = "INSERT INTO burgers (burger_name," + isEaten + ") VALUES (?)";

    connection.query(newBorger, burgerName, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(condition, cb) {
    const queryString = "UPDATE burgers set BOOLEAN false WHERE";
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
