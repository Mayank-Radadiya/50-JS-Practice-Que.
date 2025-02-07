// returns the number of days in the month


function numberOfDaysInMonth(month, year = new Date().getFullYear()) {
    return new Date(year, month, 0).getDate();
}

console.log(numberOfDaysInMonth(2, 2024)); // Output: 29 (Leap Year)
console.log(numberOfDaysInMonth(2, 2023)); // Output: 28
console.log(numberOfDaysInMonth(4, 2023)); // Output: 30
console.log(numberOfDaysInMonth(12, 2023)); // Output: 31
