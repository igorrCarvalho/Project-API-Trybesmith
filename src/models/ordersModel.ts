import connection from './connection';

export const getAllOrders = async ():Promise<object> => {
  const [result] = await connection.execute(`
  SELECT
    ordernar.id AS 'id',
    ordernar.user_id as "userId",
    JSON_ARRAYAGG(produto.id) as "productsIds"
  FROM
    Trybesmith.orders as ordernar
  INNER JOIN Trybesmith.products as produto ON produto.order_id = ordernar.id 
  GROUP BY ordernar.id ORDER BY ordernar.user_id, ordernar.id ASC`);
  return result as object;
};

export const aodwinda = () => {};