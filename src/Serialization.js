exports.ParseNumber = function(str){
    if(str && typeof str === "string"){
		return parseInt(str);
	}
}

exports.ConvertNumberToString = function(num){
	if(num && typeof num ==="number"){
		return num.toString();
	}
	return "";
}

exports.ParseDate = function(str){
  if(str){
   var d = new Date(str);
   if(d instanceof Date)
     return d;
  }
}

exports.ConvertDateToString = function(dateValue){
	if(dateValue)
	{
		return dateValue.toString();
	}
}

//Parse a string containing a comma seperated sequence of numbers
// and return an array containing the numbers. Return NaN for invalid
// numbers in the string.
exports.ParseStringOfNumbers = function(str){
	if(str && typeof str == "string"){
		var strarray = str.split(",");
		for(i in strarray){
			strarray[i]=parseInt(strarray[i]);
			if(strarray[i]==NaN){
				return NaN;
			}
		}
		return strarray;
	}
	return [];
}

exports.ConvertArrayOfNumbersToString = function(obj){
    var result = "";
    if(obj && obj instanceof Array){
    	for(i in obj){
            result = result + obj[i] + ",";
    	}
    	return result.slice(0,-1);
    }
    return "";
}


exports.ConvertStringToObject = function(str){
	if(str && typeof str == "string"){
       try{
       	 return JSON.parse(str);
       }
       catch(e){
       	 return null;
       }
	}

}

exports.ConvertObjectToString = function(obj){
	if(obj && typeof obj == "object"){
       try{
       	 return JSON.stringify(obj);
       }
       catch(e){
       	 return null;
       }
	}
}


