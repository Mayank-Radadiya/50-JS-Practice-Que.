//  Remove all occurrences of a specific element
// Remove given element from arrry

const arr = [10, 10, 20, 30, 10, 30, 40, 50, 10, 70, 80, 10];

function removeElement(arr, element) {
  return arr.filter((arr) => arr !== element);
}

const x = removeElement(arr, 10);
console.log(x);
// [
//   20, 30, 30, 40,
//   50, 70, 80
// ]
