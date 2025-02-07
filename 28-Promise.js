// Make a fetch call using promise.

async function makeApiCall(url) {
  return fetch(url).then((response) => response.json());
}

function handleData(data) {
  console.log(data);
}

function main() {
  const url1 = "https://jsonplaceholder.typicode.com/todos/1";
  const url2 = "https://jsonplaceholder.typicode.com/todos/2";

  makeApiCall(url1).then((data) => handleData(data));
  makeApiCall(url2).then((data) => handleData(data));
}
main();
