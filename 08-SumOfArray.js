// Sum of all elements in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
//Easy way
arr.forEach((arr) => (sum += arr));

// Second way
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
