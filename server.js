// Dependencies
var express = require("express");
var path = require("path");

//##################################
//EXPRESS SET UP

// Tells node that we are creating an "express" server
var app = express();

// Sets up an initial port
var port = process.env.PORT || 8080; 


 
//##################################
require("./app/routing/apiRouting.js");
require("./app/routing/htmlRouting.js");


//##################################

//Starts the server
app.listen(port, function() {
    console.log("App listening on PORT: " + port);
  });
