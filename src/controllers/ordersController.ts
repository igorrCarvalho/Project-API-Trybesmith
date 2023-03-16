import { Request, Response } from 'express';
import { supplyAllOrders } from '../services/ordersService';

export const showOrders = async (req: Request, res: Response) => {
  const { type, message } = await supplyAllOrders();
  res.status(type).json(message);
};

export const adowidn = () => {};