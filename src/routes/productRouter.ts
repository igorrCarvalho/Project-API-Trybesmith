import express from 'express';
import { insertion, showProducts } from '../controllers/productsController';

const productRouter = express.Router();

productRouter.get('/', showProducts);

productRouter.post('/', insertion);

export default productRouter;