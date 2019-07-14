// Import `orm.js`
var orm = require("../config/orm.js");

// Call the ORM functions using burger specific input for the ORM.

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    },
    updateOne: function (id, cb) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {devoured: true}, condition, cb);
    }
};

// Export the burger object for the Controller.
module.exports = burger;