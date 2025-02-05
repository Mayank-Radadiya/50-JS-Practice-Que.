// Find the largest element using reduce()

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const arr2 = arr.reduce((max, current) => {
  return current > max ? current : max;
});

console.log(arr2);
