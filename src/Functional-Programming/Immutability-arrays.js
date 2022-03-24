const numbers = [1,2,3]

// Adding a number
const addedAtEnd = [...numbers, 4];
const addedAtBeginning = [4, ...numbers];

const index = numbers.indexOf(2);
const addedSpecific = 
  [
    ...numbers.slice(0,index), //spread array to return numbers instead of array with those numbers
    4,
    ...numbers.slice(index)
  ];

// Removing

const removed = numbers.filter(n => n !==2);

//Updating

const updated = numbers.map(n => 2 ? 20 : n); // if trying to update an object, use spread operator to make a copy of that obj .| update
