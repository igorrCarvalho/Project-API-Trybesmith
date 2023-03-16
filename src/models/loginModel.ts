import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { LoginValidation } from '../interfaces';

export const userLogin = async (username: string, password: string) => {
  const [rows] = await connection.execute<LoginValidation & RowDataPacket[]>(`
    SELECT id, username, level, vocation FROM Trybesmith.users
    WHERE username = ? AND password = ?;
  `, [username, password]);
  return rows;
};

export const nono = () => {};