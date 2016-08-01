
var account = require('./moduleOne');
var converter = require('./moduleTwo');

module.exports.value = converter.convert(account.ammount);
module.exports.message = function(){
  return  '\nAccount balance: \n';
};

//console.log(module.exports.message() + module.exports.value);
