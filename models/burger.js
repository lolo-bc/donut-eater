const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(burgerName, isEaten, cb) {
        orm.updateOne("burgers", burgerName, isEaten, function(res) {
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