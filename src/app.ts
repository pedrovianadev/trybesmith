import express from 'express';
import productRoute from './routes/product.route';
import loginRoute from './routes/login.route';
import orderRoute from './routes/order.route';

const app = express();

app.use(express.json());

app.use(productRoute);

app.use(orderRoute);

app.use(loginRoute);

export default app;
