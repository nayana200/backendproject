const express = require("express");

const router = express.Router();

// Add product to user's cart
router.post('/cart/add', async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        const user = await User.findById(userId);
        const product = await Product.findById(productId);

        if (!user || !product) {
            return res.status(404).json({ error: 'User or product not found' });
        }

        const existingCartItem = user.cart.find(item => item.product.equals(productId));

        if (existingCartItem) {
            existingCartItem.quantity += quantity || 1;
        } else {
            user.cart.push({ product: productId, quantity: quantity || 1 });
        }

        await user.save();

        res.json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get user's cart
router.get('/cart/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId).populate('cart.product');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Remove product from user's cart
router.delete('/cart/remove', async (req, res) => {
    try {
        const { userId, productId } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.cart = user.cart.filter(item => !item.product.equals(productId));
        await user.save();

        res.json(user.cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
