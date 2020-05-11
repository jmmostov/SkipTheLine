// https://stackoverflow.com/questions/59174763/how-to-add-product-to-shopping-cart-with-nodejs-express-and-mongoose

//const Product = require('Product');



// Whenever we access our lineItem we pass our old lineItem into it. If there is nothing in the old lineItem,
// the items are an empty object, while totalQty, totalPrice and deliveryFee are the integer 0
module.exports = function lineItem(oldLineItems){
    this.items = oldLineItems.items || {};
    this.totalQty = oldLineItems.totalQty || 0;
    this.totalPrice = oldLineItems.totalPrice || 0;
    this.deliveryFee = oldLineItems.deliveryFee || 0;

    // The method to add a product to the lineItem
    this.add = function(product, id){
        // We want to check if a certain id already exists in this cart. If yes, we will only update the qty and price.
        // So if the id already exists we will not push a new product in.
        // this.items[id] is an object where the key is the id.
        let storedItem =  this.items[id];
        // If there is no item with that id then we want to add the product with default qty and price of 0
        if (!storedItem){
            storedItem = this.items[id] = {product: product, qty: 0, price: 0};
        }
        // Regardless of whether there we have a new product or want to add to an already existing product,
        // we just count one up on the qty of the product. Afterwards we calculate the new price.
        // Maybe we could just have said 'storedItem.price += storedItem.product.price' instead.
        storedItem.qty++;
        storedItem.price = storedItem.product.price * storedItem.qty;
        // We don't use this attribute right now, but could use it to show how many products the user have chosen
        // next to the 'shopping cart' tab while on the product page.
        this.totalQty++;
        // Since we always add only one new product we can just add the price of the chosen product to get the new totalPrice.
        this.totalPrice += storedItem.product.price;
        if(this.deliveryFee <= 0    ){ //ensures that the deliveryFee is not added multiple times.
            this.deliveryFee = 50;
            this.totalPrice += this.deliveryFee; //adds deliveryFee of 50kr on top of order.
        }
    };

    // This is the reduce method. We pretty much just do the opposite of the .add method.
    this.deleteOne = function(id) {
        this.items[id].qty--;
        this.items[id].price -= this.items[id].product.price;
        this.totalQty--;
        this.totalPrice -= this.items[id].product.price;
        // If the qty of a product hits 0 (or less), we just delete the product. Or else we just hit -1 and a negative price.
        if(this.items[id].qty <= 0){
            delete this.items[id];
        }
    }

    //
    this.deleteAll = function (id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    }

    this.gennerateArray = function () {
        let arr = [];
        for (let id in this.items){
            arr.push(this.items[id]);
        }
        return arr
    };

};