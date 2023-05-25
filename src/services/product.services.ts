import { Product } from '../types/Product';
import { ServerResponse } from '../types/ServerResponse';
import ProductModel, {
  ProductInputtableTypes, ProductSequelizeModel,
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

async function createProduct(product: ProductInputtableTypes): Promise<ServerResponse<Product>> {
  let response: ServerResponse<Product>;

  const error = checkParams(product);

  if (error) {
    response = { status: 'INVALID_DATA', data: { message: error } };
    return response;
  }

  const newProduct = await ProductModel.create(product);

  response = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return response;
}

async function listProduct(): Promise<ServerResponse<ProductSequelizeModel[]>> {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
}

export default {
  createProduct,
  listProduct,
};
