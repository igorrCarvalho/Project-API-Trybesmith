import { Request, Response } from 'express';
import { generateToken } from '../token/generateToken';
import { supplyUserInsertion } from '../services/usersService';

export const insertSuccess = async (req: Request, res: Response) => {
  const { username, vocation, password, level } = req.body;
  const { type } = await supplyUserInsertion(username, vocation, level, password);
  const { password: pass, ...others } = req.body;
  const newToken = generateToken(others);
  res.status(type).json({ token: newToken });
};

export const di = () => {};