//counter function using closures that increments
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope.

let count = 0;
function counterValue() {
  return function () {
    return ++count;
  };
}

const counter = counterValue();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
