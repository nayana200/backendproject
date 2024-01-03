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

// const mongoose = require('mongoose');
// const vendor_schema = new mongoose.Schema({
//     details: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
//     products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }]
// })


// const vendor_collection = new mongoose.model('vendor', vendor_schema)

// module.exports = vendor_collection