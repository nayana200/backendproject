const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,

        trim: true,
    },
    description: {
        type: String,

    },
    price: {
        type: Number,

        min: 0,
    },
    category: {
        type: String,

    },
    brand: String,
    color: String,
    size: String,
    inventory: {
        type: Number,
        default: 0,
    },
    imageUrl: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    totalprice: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;