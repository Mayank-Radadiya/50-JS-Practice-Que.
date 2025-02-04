//Given Function give only even value of an array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const OddArray = (arr) => {
  const newArr = arr.filter((val) => val % 2 !== 0);
  return newArr;
};

console.log(OddArray(array));
