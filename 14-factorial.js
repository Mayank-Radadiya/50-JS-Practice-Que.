// calculates the factorial

function factorial(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

const x = factorial(5);
console.log(x);
