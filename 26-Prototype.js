// Create a Prototype for a product object. Add  properties like
// product_name, product_price and product_weight. Also add a function

function product(price, number) {
  this.price = price;
  this.number = number;
}
product.prototype.CalValue = function () {
  return this.number * this.price;
};

const p1 = new product(1000, 10);
console.log(p1); // product { price: 1000, number: 10 }
const total = p1.CalValue();
console.log(total); // 10000
