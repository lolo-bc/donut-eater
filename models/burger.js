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


    update: function(condition, cb) {
        console.log(condition);
        orm.update(condition, function(res) {
            cb(res);
        });
    },

    delete: function(cb) {
        orm.delete(function(res) {
            cb(res);
        })
    }
};

module.exports = burger;