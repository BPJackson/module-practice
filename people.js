module.exports = {
  removeBadPeople: function(string)  {
    string = string.filter(function(val){
      return val.name;
    });
  return string;
},
  Runner: function(string) {
    console.log(string + ' ' + 'you should be ' + this.status);
  },
  Walker: function (string) {
    console.log(string + ' ' + 'you should be ' + this.status);
  }
};
