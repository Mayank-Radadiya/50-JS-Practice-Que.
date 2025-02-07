//  class representing a Book add method too

class book{
    constructor(title, price , quantity){
        this.title = title
        this.price = price
        this.quantity = quantity
    }
    getTotalValue() {
        return this.price * this.quantity
    }
}

const book1 = new book("abc", 100, 25)
console.log(book1.title);
const totalVal = book1.getTotalValue()
console.log(totalVal);

