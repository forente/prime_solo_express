// required libraries
var express = require('express');
var path = require('path');
var moduleOne = require('./public/modules/moduleOne');
var moduleTwo = require('./public/modules/moduleTwo');
var moduleThree = require('./public/modules/moduleThree');

console.log(moduleOne);
console.log(moduleTwo);
console.log(moduleThree);
// varables for the server
var app = express();
var port  = 3000;



app.use(express.static('public'));

app.get('/', function(request,respond){
  response.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/balance', function(request, response){
  response.body = moduleThree;
});

app.listen(port, function listening (){
  console.log("BankBot Engaged!",port);
});
