import express from 'express'
import { getProducts, createProduct } from '../controllers/productController';


const router = express.Router();


router.get('/').get(getProducts).post(createProduct);
 export default router;