// script.js for car sales website shopping cart and admin functionality

// Shopping Cart Functionality
let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} added to cart.`);
}

function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    console.log(`Product with ID ${productId} removed from cart.`);
}

function viewCart() {
    console.log('Shopping Cart:', cart);
}

// Admin Functionality
function viewOrders(orders) {
    orders.forEach(order => {
        console.log(`Order ID: ${order.id}, Total: ${order.total}`);
    });
}

function updateOrderStatus(orderId, status) {
    console.log(`Order ID ${orderId} status updated to ${status}.`);
}

// Example Product
const product1 = {id: 1, name: 'Toyota Camry', price: 24000};
addToCart(product1);

// Example Order
const orders = [{id: 1, total: 24000}, {id: 2, total: 30000}];
viewOrders(orders);
