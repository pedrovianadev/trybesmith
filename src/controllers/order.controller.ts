import { Request, Response } from 'express';
import orderService from '../services/order.services';

async function getOrders(_req: Request, res: Response) {
  const serviceResponse = await orderService.getOrders();

  res.status(200).json(serviceResponse.data);
}

export default {
  getOrders,
};