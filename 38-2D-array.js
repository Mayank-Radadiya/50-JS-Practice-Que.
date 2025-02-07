//  Print a 2d array and reverse it

// Define a 2D array
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Print original 2D array
  console.log("Original 2D Array:");
  arr.forEach(row => console.log(row));
  
  // Reverse the 2D array
  let reversedArr = arr.map(row => row.reverse()).reverse();
  
  console.log("\nReversed 2D Array:");
  reversedArr.forEach(row => console.log(row));
  

