
var account = require('./moduleOne.js');
var converter = require('./moduleTwo.js');

module.exports.value = converter.convert(account.ammount);
module.exports.message = function(){
  return  '\nAccount balance: \n';
};

//console.log(module.exports.message() + module.exports.value);
