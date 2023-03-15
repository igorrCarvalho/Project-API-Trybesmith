import express from 'express';
import { insertion } from '../controllers/productsController';

const productRouter = express.Router();

productRouter.post('/', insertion);

export default productRouter;