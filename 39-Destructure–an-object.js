//  Destructure an object

const user = {
  name: "xyz",
  id: 1,
  age: 20,
};

// Get name with Destructure

// const {name} = user
// console.log(name); // xyz

const { name, ...other } = user;

console.log(name);
console.log(other);
// xyz
// { id: 1, age: 20 }
