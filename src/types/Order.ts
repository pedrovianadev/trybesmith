import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productId?: number[];
};

export type ProductArray = {
  id: number;
  userId: number;
  productIds: Product[];
};

export type OrderWhithoutIds = {
  id: number;
  userId: number;
  productIds: number[];
};