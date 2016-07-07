// required libraries
var express = require('express');
var path = require('path');

// varables for the server
var app = express();
var port  = 3000;




app.use(express.static('public'));

app.listen(port, function listening (){
  console.log("BankBot Engaged!");
});
