import express from 'express';
import { insertSuccess } from '../controllers/usersController';

const userRouter = express.Router();

userRouter.post('/', insertSuccess);

export default userRouter;