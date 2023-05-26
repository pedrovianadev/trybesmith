import { ServerResponse } from '../types/ServerResponse';
import OrderModel from '../database/models/order.model';
import { ProductArray, OrderWhithoutIds } from '../types/Order';

async function getOrders(): Promise<ServerResponse<OrderWhithoutIds[]>> {
  const orders = await OrderModel.findAll({ include: 'productIds' });

  const values = orders.map((order) => order.dataValues) as ProductArray[];

  const list = values.map(({ id, userId, productIds }) => ({
    id,
    userId,
    productIds: productIds.map((product) => product.id),
  }));

  return { status: 'SUCCESSFUL', data: list };
}

export default {
  getOrders,
};