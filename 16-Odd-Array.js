// returns a new array of even numbers

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr2 = arr.filter((arr) => arr % 2 !== 0);
console.log(arr);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr2); // Output: [ 1, 3, 5, 7, 9 ]
