const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
    {

        slug: {
            type: String,

        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        subcategories: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subcategory',
        }],


    },
    { timestamps: true }
);

const category = mongoose.model("Category", categorySchema)
module.exports = category;



