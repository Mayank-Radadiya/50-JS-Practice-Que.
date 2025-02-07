// Function takes string and based on string convert one and zero.if any other word present then it return "".
// Ex: function("one zero one") =>  101
// Ex: function("one zero one two") =>  ""

function oneAndZero(string) {
  const arrOfStr = string.toLowerCase().split(" ");
  let str = [];
  for (let i = 0; i < arrOfStr.length; i++) {
    if (arrOfStr[i] === "one") {
      str.push(1);
    } else if (arrOfStr[i] === "zero") {
      str.push(0);
    } else {
      console.log(`${arrOfStr[i]} is Not valid.`);
      return;
    }
  }
  const output = str.join("");
  console.log(output);
}

oneAndZero("zero one one zero Zero One ONE ZERO");
