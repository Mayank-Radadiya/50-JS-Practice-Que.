// If in array if any number contain 7 so function return boom means true...

function checkNum(arr, n) {
  arr.map((num) => {
    const isInclude = num.toString().includes(n);
    if (isInclude === true) {
      console.log(`${n} is present in ${arr}`);
      return;
    }
  });
}
const arr1 = [1, 2, 3, 4, 57];

checkNum(arr1, 7);
