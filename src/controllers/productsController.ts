import { Request, Response } from 'express';
import { supplyProductInsertion } from '../services/productsService';

export const insertion = async (req: Request, res: Response) => {
  const insertSuccess = await supplyProductInsertion(req.body);
  res.status(insertSuccess.type).json(insertSuccess.message);
};

export const lint = () => {};