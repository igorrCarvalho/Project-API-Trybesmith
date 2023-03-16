export interface ProductValidation {
  id?: number;
  name: string;
  amount: string;
}

export interface UserValidation {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface LoginValidation {
  username: string;
  password: string;
}