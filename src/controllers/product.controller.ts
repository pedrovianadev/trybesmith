import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import productServices from '../services/product.services';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;

  const response = await productServices.createProduct({ name, price, orderId });

  if (response.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(response.status)).json(response.data);
  }

  return res.status(201).json(response.data);
};

const listProduct = async (req: Request, res: Response): Promise<Response> => {
  const response = await productServices.listProduct();

  if (response.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(response.status)).json(response.data);
  }
  
  return res.status(200).json(response.data);
};

export default {
  createProduct,
  listProduct,
};