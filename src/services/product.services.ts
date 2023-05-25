import { Product } from '../types/Product';
import { Response } from '../types/ServerResponse';
import ProductModel, {
  ProductInputtableTypes,
} from '../database/models/product.model';

function checkParams({
  name,
  price,
  orderId,
}: ProductInputtableTypes): string | null {
  if (!name) return 'Name is required';
  if (!price) return 'Price is required';
  if (!orderId) return 'Order Id is required';

  return null;
}

async function createProduct(product: ProductInputtableTypes): Promise<Response<Product>> {
  let response: Response<Product>;

  const error = checkParams(product);

  if (error) {
    response = { status: 'INVALID_DATA', data: { message: error } };
    return response;
  }

  const newProduct = await ProductModel.create(product);

  response = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return response;
}

export default {
  createProduct,
};
