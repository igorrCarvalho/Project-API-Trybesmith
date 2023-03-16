import express from 'express';
import { showOrders } from '../controllers/ordersController';

const orderRouter = express.Router();

orderRouter.get('/', showOrders);

export default orderRouter;