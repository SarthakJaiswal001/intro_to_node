const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

var myVillain=supervillains.random();
console.log(myVillain)
const os = require('node:os');
console.log(os.freemem())