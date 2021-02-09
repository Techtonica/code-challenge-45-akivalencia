



// Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.
//
// max_end3([1, 2, 3]) → [3, 3, 3]
//
// max_end3([11, 5, 9]) → [11, 11, 11]
//
// max_end3([2, 11, 3]) → [3, 3, 3]
//
// Bonus Challenge:  Try to do this _without_ initializing a new array.

//max/min method 
  // Add functionality here!
  // for (let i=0; i<int_array.length; i++){
  //   var largest= int_array[0];
  //   if (int_array[i]>largest){
  //     largest= int_array[i];
  //   } else largest=largest;
  // }
  // return largest;

function max_end3(int_array){
  //max method array
  let largest= Math.max(int_array[0], int_array[int_array.length-1]);
  for (let i=0; i<int_array.length; i++){
    //set all items equal to largest #
    int_array[i]= largest;
  }
  return int_array;
}

max_end3([1,2,3]);
max_end3([100,4505,8]);


module.exports = max_end3;
