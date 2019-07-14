var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.

// Redirect root to /burgers route, to display all burgers.
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.selectAll(function (burgerData) {
    var hdbrsObject = {
      burger_data: burgerData
    };
    // render index.handlebars and pass in burgerData
    res.render("index", hdbrsObject);
  });
});

router.post("/burgers/create", function (req, res) {
  // takes the request object using it as input for burger.insertOne
  burger.insertOne(req.body.burger_name, function (result) {
    // console.log(result);
    res.redirect("/burgers");
  });
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(result) {
    // console.log(result);
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;