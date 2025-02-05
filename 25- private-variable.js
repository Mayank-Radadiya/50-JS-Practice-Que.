//Implement a private variable using closures 

function counterValue() {
    // count is private variable....Can't use outside of {}.
  let count = 0;
  return function () {
    return ++count;
  };
}

console.log(count); // error......



