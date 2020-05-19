var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    // insertOne: function(burgerName, isEaten, cb) {
    //     orm.updateOne("burgers", burgerName, isEaten, function(res) {
    //         cb(res);
    //     });
    // },

    insertOne: function(objColVals, condition, cb) {
        orm.updateOne("cats", objColVals, condition, function(res) {
          cb(res);
        });
      },

    updateOne: function(condition, cb) {
        orm.updateOne("burgers", condition, function(res) {
            cb(res);
        });
    },
};

module.exports = burger;