function fractionToString(numerator, denominator) {
    if (denominator === 0) return "Undefined (division by zero)";
    
    let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // Find GCD
    let divisor = gcd(numerator, denominator);
    
    let simplifiedNumerator = numerator / divisor;
    let simplifiedDenominator = denominator / divisor;

    return `${simplifiedNumerator}/${simplifiedDenominator}`;
}

// Example Usage:
console.log(fractionToString(8, 12));  // Output: "2/3"
console.log(fractionToString(10, 5));  // Output: "2/1"
console.log(fractionToString(7, 3));   // Output: "7/3"
console.log(fractionToString(0, 5));   // Output: "0/1"
console.log(fractionToString(5, 0));   // Output: "Undefined (division by zero)"
