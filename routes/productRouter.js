const productController = require('../controller/productController.js');

const router = require('express').Router();

router.post('/addMobil', productController.addProduct);

router.get('/allMobil', productController.getAllProduct);

router.get('/published', productController.getPublishedProduct);

router.get('/:id', productController.getOneProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router