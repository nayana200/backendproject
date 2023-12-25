const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, },
        img: { type: String, required: true },
        categories: { type: Array },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
        offer: { type: Number },
        productPictures: [
            { img: { type: String } }
        ],
        reviews: [
            {
                userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
                review: String
            }
        ],
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        updatedAt: Date,

    },


    { timestamps: true }

)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;