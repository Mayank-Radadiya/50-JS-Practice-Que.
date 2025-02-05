//random number between a given range

function reandomnumber(n1, n2) {
  const reandomNum = Math.floor(Math.random() * (n2 - n1) + n1);
  return reandomNum;
}

const x = reandomnumber(10, 20);
console.log(x);
