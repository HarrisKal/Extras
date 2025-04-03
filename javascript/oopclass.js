const {log} = console;

const user = {
    name: 'Kim',
    cart: [],
    purchases: []
}

class User {
    constructor(name) {
        this.name = name;
        this.cart = [];
        this.purchases = [];
    }

    addToCart(item) {
        this.cart.push(item);
        return `${item} added to cart!`;
    }

    removeFromCart(item) {
        if (!this.cart.item) return `Item ${item} doesn't exist in your cart`;
        this.cart.splice(this.cart.indexOf(item), 1);
        return `${item} removed from the cart!`;
    }

    purchase(item) {
        if (this.cart.item) 
            this.cart.splice(this.cart.indexOf(item), 1);
        this.purchases.push(item);
        return `Purchased ${item}`;
    }
}

class Poduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    addToCartOf(user) {
        this.price += this.price * 0.03;
        user.cart.push(this);
        return `${this} added to cart!`;
    }
    
    addToPurchasesOf(user) {
        if (!{user}) return 'Cart doesn\'t exist';
        if (user.cart.includes(this)) {
            user.cart.splice(user.cart.indexOf(this), 1);
            user.purchases.push(this);
            return `Purchased ${this}`;
        } 
        return 'You do not have that item in your shopping cart';
    }
}

const user2 = new User('Ron');
const azur = new Poduct('azur', 40);

user2.addToCart(azur);
log(user2.cart);