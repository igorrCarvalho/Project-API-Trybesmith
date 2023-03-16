/* import { userLogin } from '../models/loginModel';
import { generateToken } from '../token/generateToken';

export const supplyUserLogin = async (name: string, pass: string) => {
  const user = await userLogin(name, pass);
  const { username, password} = user;
  if (!name) {
    return { isErr: true, type: 400, message: '"username" is required' };
  }
  if (!pass) {
    return { isErr: true, type: 400, message: '"password" id required' };
  }
  if (!user || pass !== password) {
    return { isErr: true, type: 401, message: 'Username or password invalid' };
  }
  const tokenData = { id: user.id, username };
  const newToken = generateToken(tokenData);
  return { isErr: false, type: 200, message: newToken };
};

export const nonono = () => {}; */