const mongoose = require("mongoose");

const addtocartSchema = mongoose.Schema({

    product_id: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    vendor_id: {
        type: String,
        required: true
    },

    store_id: {
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true 
    },
});

module.exports = mongoose.model("Add-to-Cart", addtocartSchema);