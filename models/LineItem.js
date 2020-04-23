// https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose

//const Product = require('Product');



// When ever we recreate our lineItem in the this.add we pass our old lineItem into it.
module.exports = function lineItem(oldLineItems){
    this.items = oldLineItems.items || {};
    this.totalQty = oldLineItems.totalQty || 0;
    this.totalPrice = oldLineItems.totalPrice || 0;
    this.deliveryFee = oldLineItems.deliveryFee || 0;


    this.add = function(product, id){
        // Nu vil vi sørge for, at Qty bliver opdateret i stedet for bare at tilføje endnu et objekt med samme id.
        // Dette gøres ved at opdatere en persons lineItem hver gang ved hjælp af følende funktion.
        let storedItem =  this.items[id];
        if (!storedItem){
            storedItem = this.items[id] = {product: product, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.product.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.product.price;
        if(this.deliveryFee === 0){ //ensures that the deliveryFee is not added multiple times.
            this.deliveryFee = 50;
            this.totalPrice += this.deliveryFee; //adds deliveryFee at 50kr on top of order.
        }
    };

    this.gennerateArray = function () {
        let arr = [];
        for (let id in this.items){
            arr.push(this.items[id]);
        }
        return arr
    };

};