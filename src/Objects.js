exports.GetObjectPropertyNames = function(obj) {
	var result = [];
	if(obj){
		for(i in obj){
           result.push(i);
		}
		return result;
	}
}

exports.GetObjectPropertyValues = function(obj) {
    var result = [];
	if(obj){
		for(i in obj){
           result.push(obj[i]);
		}
		return result;
	}
}

