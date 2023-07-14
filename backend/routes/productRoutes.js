import express from 'express';
import products from '../data/products.js';
// import asyncHandler from '../middleware/asyncHandler.js';
// import Product from '../models/productModel.js';
import { getProducts, getProductById } from '../controllers/productController.js';
const router = express.Router();

// route to get products
// router.get('/' , asyncHandler(async (req, res)=>{
//     const products = await Product.find({});
//     res.json(products);
// }));
// // to get a single product
// router.get('/:id' , asyncHandler(async (req, res)=>{
//     const product = await Product.findById(req.params.id);
//     if(product)
//     {
//         res.json(product);
//     }
//     else
//     {
//         res.status(404);
//         throw new Error('Resource Not Found');
//     }
// }));

// using functions defined in product controller instead
router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;