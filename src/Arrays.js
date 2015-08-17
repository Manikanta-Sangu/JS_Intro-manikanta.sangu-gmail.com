exports.SumOfArray = function(arrayOfNums){
   var sum =0;
   for(i in arrayOfNums){
      sum += arrayOfNums[i];
   }
   return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
  var sum = 0;
  var count =0;
  for(i=0;i<arrayOfNums.length;i++){
      count = 0;
      for(j=i+1;j<arrayOfNums.length;j++){
      	if(arrayOfNums[i] === arrayOfNums[j]){
      		count++;
      	}
      }
     if(!count){
     	sum += arrayOfNums[i];
     }
  }
  return sum;
}

//2-D array exercises
// Given a 2-d array, verify it is of equal dimensions and return
// the sum of diagonal elements.

exports.SumOfDiagonalCells = function(array2d){
   var valid = true;
   var sum = 0;
   if(!(array2d instanceof Array))
       valid = false;

   for(i in array2d){
   	  if(!(array2d[i] instanceof Array))
       valid = false;
   	  if(array2d[i].length != array2d.length) {
   	  	valid = false;
   	  }
   } 
   if(!valid)
   	return "failed";
   else{
   	 for(i in array2d)
       sum+=array2d[i][i];
   }
   return sum;
}
