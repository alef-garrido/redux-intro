// Working with immutability when updating objects

const person = 
  { 
    name: 'John',
    address: {
      country: 'Mexico',
      city: 'Oaxaca'
    }
  };
const updated = Object.assign({}, person, { name: "Bob", age:30}) // Copying object with Obeject,assign()
console.log(update)

const updatedB = { // When using spread operator, deep-copying is needed to not modify original object
  ...person, 
  name: 'Boby',
  address: {
    ...person.address, // deep-copying is using the spread operator to copy every nested object before updating a prop
    city: 'Morelia'
  }
}
console.log(person)
console.log(updatedB)