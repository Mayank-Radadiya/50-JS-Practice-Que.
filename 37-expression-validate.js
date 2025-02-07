// Regular expression to validate an email


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Example Usage
function validateEmail(email) {
  return emailRegex.test(email);
}

console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("invalid-email"));    // false
console.log(validateEmail("user@domain.co.in")); // true
console.log(validateEmail("user@domain"));       // false


