// checks if a given year is a leap year

function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "Leap Year";
  }

  return "Not Leap year";
}

const year1 = leapYear(2005);
console.log(year1);
// Not Leap Year
