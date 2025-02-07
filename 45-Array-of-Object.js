// takes an array of objects and return the total price

const products = [
  { id: 1, productName: "Laptop", price: 1200 },
  { id: 2, productName: "Smartphone", price: 800 },
  { id: 3, productName: "Tablet", price: 500 },
  { id: 4, productName: "Smartwatch", price: 300 },
  { id: 5, productName: "Headphones", price: 150 },
  { id: 6, productName: "Keyboard", price: 100 },
  { id: 7, productName: "Mouse", price: 50 },
  { id: 8, productName: "Monitor", price: 400 },
  { id: 9, productName: "Printer", price: 250 },
  { id: 10, productName: "Gaming Chair", price: 350 },
];

function totalPrice(arr) {
  let sum = 0;
  arr.map((item) => {
    sum += item.price;
  });

  console.log("Total Sum", sum);
}

totalPrice(products)