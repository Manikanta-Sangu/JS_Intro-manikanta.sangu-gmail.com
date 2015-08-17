exports.ReverseString = function(str){
   var result = [];
   if(str)
   	{
   	   for(i=0;i<(str.length);i++)
	   {
          result += str[str.length-1-i];
	   }
   return result;
   }
}

// Given a string with lname,fname - return an array with the first names.
// Example: SplitString("Gates,Bill;Jobs,Steve;Page,Larry") should return
// an array ["Bill","Steve","Larry"]

exports.GetFirstNames = function(str){
	if(str){
		var result =[];
	    var first = str.split(";");
	    for(i in first){

	       if(first[i]) result.push(first[i].split(",")[1]);
	    }
	    return result;
   }
   return str;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
  return exports.ReverseString(arrayOfStrings);
}

// Given an array of sentences, create a paragraph by concatenating all the strings and adding
// fullstop (.) after each senetences.
exports.CreateParagraph = function(arrayOfStrings){
    var result="";
    if(arrayOfStrings){
       for(i in arrayOfStrings){
       	   result += arrayOfStrings[i] + ".";
       }
        return result;
    }
    return arrayOfStrings;
}

