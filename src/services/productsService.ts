import { insertNewProduct } from '../models/productsModel';
import { ProductValidation } from '../interfaces';

export const supplyProductInsertion = async (product: ProductValidation) => {
  const insertion = await insertNewProduct(product);
  return { isErr: false, type: 201, message: insertion };
};

export const yesyes = () => {};