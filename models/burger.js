var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(burgerName, cb) {
        orm.create("burgers", ["burger_name", "devoured"], [burgerName, false], cb)
    },

    // insertOne: function(objColVals, condition, cb) {
    //     orm.updateOne("cats", objColVals, condition, function(res) {
    //       cb(res);
    //     });
    //   },

    updateOne: function(condition, cb) {
        orm.update("burgers", condition, function(res) {
            cb(res);
        });
    },
};

module.exports = burger;