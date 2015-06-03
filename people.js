module.exports = {
  removeBadPeople: function(string)  {
    string = string.filter(function(val){
      return val.name;
    });
  return string;
  }
};
