const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');


const productSchema = new mongoose.Schema({
    title:String,
    image:String,
    description:String,
    sizes:[String],
    price:Number,
    deleted:{type: Boolean, default: false}
});

productSchema.plugin(timestamp);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;