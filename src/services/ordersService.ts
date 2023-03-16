import { getAllOrders } from '../models/ordersModel';

export const supplyAllOrders = async () => {
  const allOrders = await getAllOrders();
  return { isErr: false, type: 200, message: allOrders };
};

export const adoiwnd = () => {};