// Functions can be 
// - assigned to a var
// - passed as arguments
// -returned from other functions

// function sayHello() {
//   return "Hello Gurl"
// }

// let fn = sayHello;
// fn()  
// sayHello()


//Higher-order functions work with functions as arguments ot return values 
// function greet(fnMessage) {
//   return console.log(fnMessage());
// }

// greet(sayHello);

// function sayHi() {
//   return function() {
//     return "Werk gurl";
//   }
// }

//EXAMPLES
//map method is a higher-order function
// let numbers = [1,2,3];
// numbers.map((n) => n*2 )

//setTimeout is another high-order function
// setTimeout(()=> console.log('hello'), 1000)