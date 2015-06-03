var people = require("./people.js");

var peeps = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];


var result = people.removeBadPeople(peeps);

console.log(result);
