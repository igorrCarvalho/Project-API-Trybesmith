import { insertUser } from '../models/usersModel';

export const supplyUserInsertion = async (
  name: string,
  vocation: string,
  level: number,
  pass: string,
) => {
  const insert = await insertUser(name, vocation, level, pass);
  return { isErr: false, type: 201, message: insert };
};

export const yesyes = () => {};