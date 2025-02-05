//random number between a given range

function randomNumber(n1, n2) {
  const randomNum = Math.floor(Math.random() * (n2 - n1) + n1);
  return randomNum;
}

const x = randomNumber(10, 20);
console.log(x);
