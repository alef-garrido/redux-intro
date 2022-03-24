// PROBLEM - In a functional pipeline every output that goes into the next function (as its input-argument) HAS TO BE A FUNCTION. Sometimes a funtion inside a pipeline returns a value !== function (a string, bool, number, etc) while the next function is specting a funtion with 2 arguments. This is the problem tat Currying solves, taking a func with 1 parms and returning a function with one. N => 1
// Currying is a technique for reducing the number of parameters of a function to one. N => 1

const add = a => b => a + b; 

import { compose, pipe } from 'lodash/fp'; // lodash functional programming package

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



let input = '   JavaScript  ';
  
const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`; // Curryng applied
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap('div')); // Curryng applied
console.log(transform(input));