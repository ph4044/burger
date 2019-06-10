// DEPENDENCIES
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

// EXPRESS CONFIGURATION

// Create an instance of the express app.
var app = express();

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set the port of our application.  process.env.PORT lets the port be set by Heroku.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes to give server a "map" of how to respond when users visit or request data from various URLs.
var routes = require("../controllers/burgers_controller.js");

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("App listening on PORT: " + PORT);
});