// PROBLEM - In a functional pipeline every output that goes into the next function (as its input-argument) HAS TO BE A FUNCTION. Sometimes a funtion inside a pipeline returns a value !== function (a string, bool, number, etc) while the next function is specting a funtion with 2 arguments. This is the problem tat Currying solves, taking a func with 1 parms and returning a function with one.
// Curryng is a technique that allow us to take N arguments and return 1. 

// Otiginal function 
// function add (a, b) {
//     return a + b;
// }

// Currying
function add (a) {
  return function(b) {
    return a + b;
  }
}

//arrow function
const add2 = (a) => (b) => a + b; // add(a, b) => a+b;

add(1)(5);  // add(1,5)
