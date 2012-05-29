/**
* Module example + callback
*
*/
var url = require('url');

var hello_parser = (function () {

  var module = {};

  module.parse = function(req, callback) {
    parsed_url = url.parse(req.url, true);
    if (parsed_url.query) {
      callback(parsed_url.query.q);
    }
    callback("");
  };
  
  return module;

}());

module.exports = hello_parser;