// create a function that calculate a sum of given number. If number sum is even that ,means number is Evenish.
// 41 = 4+ 1 = 5. 5 is odd. So 41 is Oddish number.

function checkNumber(n) {
  let numberArr = n.toString().split("").map(Number);

  let sum = 0;
  for (let i = 0; i < numberArr.length; i++) {
    sum += numberArr[i];
  }

  console.log("sum =>", sum);

  if (sum % 2 === 0) {
    console.log("Evenish Number");
  } else {
    console.log("Oddish number");
  }
}

checkNumber(121);
