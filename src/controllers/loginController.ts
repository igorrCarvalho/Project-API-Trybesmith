/* import { Request, Response } from 'express';
import { supplyUserLogin } from '../services/loginService';

export const loginSucceed = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const { isErr, type, message } = await supplyUserLogin(username, password);
  if (isErr) return res.status(type).json({ message });
  res.status(type).json({ token: message });
}; */

export const omadowpdmn = () => {};

export const adlwiknd = () => {};