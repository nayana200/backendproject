const mongoose = require('mongoose');

// Define a schema for Vendor
const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    contact: {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: String,
        address: String,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
});

// Create a model based on the schema
const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;