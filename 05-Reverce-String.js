//function returns the reversed version string

function reverseString(str) {
  if (typeof str == "string") {
    const reversed = str.split("").reverse();
    return reversed;
  }

  return;
}

const str1 = reverseString("Hello");
console.log(str1);
