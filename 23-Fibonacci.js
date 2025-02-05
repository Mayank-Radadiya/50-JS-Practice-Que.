//recursive function finds the nth Fibonacci number

function Fibonacci(n) {
  if (n <= 1) return n;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

const x = Fibonacci(3);
console.log(x);
