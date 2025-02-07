// Make a function which use callback function...
// Callback means pass function as parameter in another  function.

function makeApiCall(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => callback(json));
}

function handleData(data) {
  console.log(data);
}

function main(){
    const url1 = "https://jsonplaceholder.typicode.com/todos/1"
    const url2 = "https://jsonplaceholder.typicode.com/todos/2"

    makeApiCall(url1, handleData)
    makeApiCall(url2, handleData)
}
main()