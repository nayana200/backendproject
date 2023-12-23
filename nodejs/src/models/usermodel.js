const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,

    },

    // firstName: {
    //     type: String,
    //     required: true,
    // },
    // lastName: {
    //     type: String,
    //     required: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    //     lowercase: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
    // address: {
    //     street: {
    //         type: String,
    //     },
    //     city: {
    //         type: String,
    //     },
    //     state: {
    //         type: String,
    //     },
    //     zipCode: {
    //         type: String,
    //     },
    //     country: {
    //         type: String,
    //     },
    // },
    // phoneNumber: {
    //     type: String,
    // },
    // // Add more fields as needed

    token: {
        type: String,

    },
    resetToken: {
        type: String,

    },
    resetTokenExpiration: {
        type: String,
    }

})

const User = mongoose.model('user', userSchema)
module.exports = User


