class book {
  constructor(title, price, quantity) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
  getTotalValue() {
    return this.price * this.quantity;
  }
}

class magazine extends book {
  constructor(title, price, quantity,author) {
    super(title, price, quantity)
    this.author = author;
  }

  getMagazineInfo() {
    return {
      Author: this.author,
      title: this.title,
      price: this.price,
      totalValue: this.getTotalValue(),
    };
  }
}

const magazine1 = new magazine("xyz", 200, 5 , "Jon")
console.log(magazine1);

const magazine1Info = magazine1.getMagazineInfo()
console.log(magazine1Info);


