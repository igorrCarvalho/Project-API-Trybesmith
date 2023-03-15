import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { ProductValidation } from '../interfaces';

export const insertNewProduct = async ({ 
  amount, name,
}: ProductValidation): Promise<ProductValidation> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`INSERT INTO
    Trybesmith.products (amount, name)
    VALUES (?, ?)
    `, [amount, name]);
  return { id: insertId, amount, name };
};

export const getAllProducts = async (): Promise<ProductValidation[]> => {
  const [result] = await connection.execute<ProductValidation[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products
  `);
  return result;
};