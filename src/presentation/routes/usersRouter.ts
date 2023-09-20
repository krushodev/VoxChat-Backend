import { Router } from 'express';

import UsersController from '../controllers/usersController';

const usersRouter = Router();

usersRouter.get('/', UsersController.list);
usersRouter.get('/:id', UsersController.getOne);
usersRouter.post('/', UsersController.createOne);

export default usersRouter;
