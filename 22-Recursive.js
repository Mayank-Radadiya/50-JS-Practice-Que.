// recursive function find factorial

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

const x = factorial(5);
console.log(x);
