// Given a date in string format, return the day it corresponds to.
exports.GetDay = function(dateString){
   if(dateString){
   var d = new Date(dateString);
   if(d instanceof Date)
     return d.getDay();
  }
}

