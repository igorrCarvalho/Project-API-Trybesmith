import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'SenhaSuperSegura123';

export const generateToken = (data:object) => jwt.sign(
  { data }, 
  secret,
  {
    algorithm: 'HS256',
    expiresIn: '1d',
  },
);

export const verifyToken = (token:string) => jwt.verify(token, secret);