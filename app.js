var people = require("./people.js");

var peeps = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];
var walk = {
  status: 'walking'
};
var run = {
  status: 'running'
};


var result = people.removeBadPeople(peeps);

var resultRun = people.Runner.call(run, "oh no");

var resultWalk = people.Walker.call(walk, "everything will be fine");

console.log(result);
