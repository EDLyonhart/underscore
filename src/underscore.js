var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    if (n === undefined) {
      x = array.splice(0, 1);
      return x[0];
    } else {
      return array.splice(0, n);
    }
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    if (n === undefined) {
      x = array.splice(array.length-1, 1);
      return x[0];
    } else if (n > array.length) {
        return array;
      } else {
      return array.splice(array.length-n, n);
    }
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    newArray = [];
    array.forEach(function(element, index, arr){
      if(arr.indexOf(element) === index) {
        newArray.push(element);
      }
    });
    return newArray;
  },  //this finds the first instance of each unique item
      //subsequently checks all instances of that against the index of the first.
      //since they wont be at the same index, it will filter out to false.

  // Takes an array of objects and returns an array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    newArray = [];
    for(var i = 0; i < array.length; i++){
       newArray.push(array[i]['name']);
    }
    return newArray;
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    present = false;
    for(var i = 0; i < array.length; i++){
      if (array[i] === target){
        present =  true;
      }
    }
    return present;
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    for(var i = 0; i < array.length; i++){
        x = (""+ array);
      if (array[i].isArray) {
        newArray.push(flatten(array[i]));
      } else {
        newArray.push(array[i]);
      }
    }
    return x.split(',').map(Number);
  }
};
module.exports = myFunctions;
