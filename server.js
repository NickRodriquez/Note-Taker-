// Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Initialize 
const app = express();
const PORT = process.env.PORT || 3000;

// Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes 
require('./routes/routes')(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  