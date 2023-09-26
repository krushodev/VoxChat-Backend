import { Router } from 'express';

import RoomController from '../controllers/roomController';

const roomRouter = Router();

roomRouter.get('/', RoomController.list);
roomRouter.get('/:id', RoomController.getOne);
roomRouter.post('/', RoomController.createOne);

export default roomRouter;
