const express = require('express');
const router = express.Router();
const controller = require('./controller');
const productController = new controller();


router.get('/products', productController.showProduct);
router.post('/products', productController.createProduct);
router.put('/product/:id', productController.deleteProduct);
router.post('/orders', productController.creatingOrder);

module.exports=router;
