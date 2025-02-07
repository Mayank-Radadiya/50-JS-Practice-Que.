// Reverse words with odd length
// if string length is even then Reverse else print same string.

function stringReverse(str) {
  const strLength = str.toString().split("");
  if (strLength.length % 2 === 0) {
    console.log(`String: ${str}, length: ${strLength.length}`);
  } else {
    const reverseStrArray = strLength.reverse();
    const reverseStr = reverseStrArray.join("");
    console.log(`Reverse String: ${reverseStr}, length: ${strLength.length}`);
  }
}

stringReverse("abcde xyz");
