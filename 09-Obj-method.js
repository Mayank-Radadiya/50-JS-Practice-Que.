// Create an object and add a method

const user = {
  name: "xyz",
  id: "1",
  salary: 50000,
};

user.countSalary = () => {
  if (user.salary > 30000) {
    console.log("Pay Tax");
  } else {
    console.log("Don't pay tax");
  }
};
console.log(user);
// Output: {
//   name: 'xyz',
//   id: '1',
//   salary: 50000,
//   countSalary: [Function (anonymous)]
// }

console.log(user.countSalary());
// Pay Tax
