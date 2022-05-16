const express = require('express');
const router = express.Router();
const controller = require('./controller');
const productController = new controller();


router.get('/products', productController.showProduct);
router.post('/products', productController.createProduct);
router.delete('/product/:id', productController.deleteProduct)

module.exports=router;
