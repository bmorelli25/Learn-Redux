var redux = require('redux');

console.log('Starting Redux Example');

// Pure function
// always going to return the same result, given the same input
// there are no side effects. Doesn't change or update any variables
// there are no asynch requests (promises or callbacks)
// Can't update the values that get passed in
function add (a,b) {
  return a + b;
}

// Not Pure Functions

var a = 3;
function add (b) {
  reutrn a + b;
}

var result;
function add (a,b) {
  result = a + b;
  return result;
}

function add (a,b) {
  return a + b + new Date().getSeconds();
}

// Another example

function changeProp (obj) { // pure function
  return {
    ...obj,
    name: 'Jen'
  }

  // if we use this code, it is not pure
  //obj.name = 'Jen'
  //return obj;
}

var startingValue = ({
  name: 'Brandon',
  age: 25
});

var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);
