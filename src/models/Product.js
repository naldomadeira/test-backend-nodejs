const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    }
});

mongoose.model('Product', ProductSchema);