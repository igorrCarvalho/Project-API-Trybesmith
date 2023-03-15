import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export const insertUser = async (name: string, vocation: string, level: number, pass: string) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO
    Trybesmith.users (username, level, password, vocation)
    VALUES (?, ?, ?, ?)
  `, [name, level, pass, vocation]);
  return { id: insertId, username: name, vocation, level, password: pass };
};

export const dipsdibididips = () => {};