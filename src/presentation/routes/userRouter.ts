import { Router } from 'express';

import UserController from '../controllers/userController';

const userRouter = Router();

userRouter.get('/', UserController.list);
userRouter.get('/:id', UserController.getOne);
userRouter.post('/', UserController.createOne);

export default userRouter;
