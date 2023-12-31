import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRoute = Router();

productRoute.post('/products', productController.createProduct);

productRoute.get('/products', productController.listProduct);

export default productRoute;