const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../apiSchema/productSchema');
const tokenValidation = require('../middleware/tokenValidation');


router.post('/', 
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(productSchema.createProductSchema), 
    productController.createProduct);

router.get('/:id', 
    tokenValidation.validateToken,
    productController.getProductbyId);

router.put('/:id', 
    tokenValidation.validateToken,
    joiSchemaValidation.validateBody(productSchema.updateProductSchema), 
    productController.updateProduct);

router.delete('/:id', 
    tokenValidation.validateToken,
    productController.deleteProduct);

router.get('/', 
    tokenValidation.validateToken,
    joiSchemaValidation.validateQueryParams(productSchema.getAllProductsSchema), 
    productController.getAllProducts);

module.exports = router;