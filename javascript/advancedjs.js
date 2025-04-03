const {log} = console;

function numberToAccountingString(num) {
    if (typeof num !== 'number') return;
    if (num < 0) return `(${Math.abs(num)})`;
    return num.toString();
}

const taxRate = 1.1;
const defaultShippingCost = 5;

function calculateTotal(items, {shippingCost = defaultShippingCost, discount = 0} = {}) {
    if (!Array.isArray(items) || items.length === 0) return 0;

    const discountRate = 1 - discount;
    const itemCost = items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    return itemCost * discountRate * taxRate + shippingCost;
}

const testItems = [
    {price: 15, quantity: 2},
    {price: 20, quantity: 1},
    {price: 5, quantity: 4},
]

setTimeout(clearInterval(setInterval(function() {console.log('aaa')}, 2000)), 10000)