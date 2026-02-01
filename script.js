// script.js

// Shopping Cart Functionality
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Admin Authentication
class AdminAuth {
    constructor() {
        this.admins = new Set();
    }

    addAdmin(username) {
        this.admins.add(username);
    }

    isAdmin(username) {
        return this.admins.has(username);
    }
}

// Product Management
class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    updateProduct(productId, updatedProduct) {
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
        }
    }

    deleteProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }
}

// Example Use
const cart = new ShoppingCart();
const adminAuth = new AdminAuth();
const productManager = new ProductManager();

adminAuth.addAdmin('admin1');
adminAuth.addAdmin('admin2');
productManager.addProduct({ id: 1, name: 'Apple', price: 0.5 });
productManager.addProduct({ id: 2, name: 'Banana', price: 0.75 });

console.log(productManager.getProducts());
