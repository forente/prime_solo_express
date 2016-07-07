// required libraries
var express = require('express');
var path = require('path');
var moduleOne = require('./modules/moduleOne');
var moduleTwo = require('./modules/moduleTwo');
var moduleThree = require('./modules/moduleThree');
console.log(moduleOne);

// varables for the server
var app = express();
var port  = 3000;




app.use(express.static('public'));

app.listen(port, function listening (){
  console.log("BankBot Engaged!");
});
