const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true, default: 1 }
        }
    ],
    totalAmount: { type: Number, default: 0 }
});

const Cart = mongoose.model('Cart', cartSchema);

// Add a method to add a product to the cart and update stock
cartSchema.methods.addToCartAndUpdateStock = async function (productID, quantity) {
    try {
        const product = await mongoose.model('Product').findById(productID);

        if (!product) {
            throw new Error('Product not found');
        }

        if (product.stock < quantity) {
            throw new Error('Insufficient stock');
        }

        // Check if the product is already in the cart
        const existingItem = this.items.find(item => item.product.equals(productID));

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product: productID, quantity });
        }

        this.totalAmount += product.price * quantity;

        // Update the product stock
        await product.decrementStock(quantity);

        await this.save();

        return 'Product added to cart successfully';
    } catch (error) {
        throw error;
    }
};

module.exports = Cart;