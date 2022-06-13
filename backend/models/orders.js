const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const orderSchema = new mongoose.Schema({
    products: [
        {productId:String, price:Number, count: Number}
    ],
    name: String,
    email: String,
    address: String,
    total: Number
});


orderSchema.plugin(timestamp);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;