/**
* Simple script that illustrates the async nature of Node.js
*
*/
setInterval(function() {
  console.log('hello');
}, 1000);

setInterval(function() {
  console.log('hello world');
}, 2000);