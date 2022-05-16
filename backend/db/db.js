
const mongoose = require('mongoose');

const connection=()=>{
    mongoose.connect('mongodb://localhost:27017/shoppingcart')
    .then(()=>console.log('connected to mongodb'))
    .catch(e=>console.log('couldnot connect to mongodb'));
}


module.exports = connection;