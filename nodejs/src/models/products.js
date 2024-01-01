const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    offer: { type: Number },
    vendor: { type: String },
    productPictures: [
        { img: { type: String } }
    ],
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            review: String
        }
    ],
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedAt: Date,


});

// Add a method to decrement the stock
productSchema.methods.decrementStock = async function (quantity) {
    if (this.stock >= quantity) {
        this.stock -= quantity;
        await this.save();
        return true; // Stock updated successfully
    } else {
        return false; // Insufficient stock
    }
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;