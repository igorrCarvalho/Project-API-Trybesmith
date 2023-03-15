import { Request, Response } from 'express';
import { supplyProductInsertion, supplyAllProducts } from '../services/productsService';

export const insertion = async (req: Request, res: Response) => {
  const insertSuccess = await supplyProductInsertion(req.body);
  res.status(insertSuccess.type).json(insertSuccess.message);
};

export const showProducts = async (req: Request, res: Response) => {
  const { type, message } = await supplyAllProducts();
  res.status(type).json(message);
};