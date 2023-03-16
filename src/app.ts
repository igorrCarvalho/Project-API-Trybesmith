import express from 'express';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';
import loginRouter from './routes/loginRouter';
import orderRouter from './routes/orderRouter';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use('/login', loginRouter);

app.use('/orders', orderRouter);

export default app;
