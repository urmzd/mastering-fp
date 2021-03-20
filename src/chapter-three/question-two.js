// Q#3.2 - Would listArguments work the same if we were to use arrow functions?
//
const listArguments = () => {
  console.log(arguments);
  var myArray = Array.prototype.slice.call(arguments);
  console.log(myArray);
  somethingElse.apply(null, myArray);
}

function somethingElse() {
  // do something with args;
}

const listArguments2 = (...args) => {
  console.log(args);
  somethingElse(...args);
}


listArguments(1,2,3)

// Conclusion: would work for listArguments 2 but not listArguments
// since arguments is an object passed to only functions.
