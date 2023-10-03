import { Router } from 'express';

import RoomController from '../controllers/roomController';

const roomRouter = Router();

roomRouter.get('/', RoomController.list);
roomRouter.get('/:id', RoomController.getOne);
roomRouter.get('/:id/messages', RoomController.getMessages);
roomRouter.post('/', RoomController.createOne);
roomRouter.post('/:id/messages', RoomController.sendMessage);
roomRouter.put('/:id', RoomController.updateOne);
roomRouter.delete('/:id', RoomController.removeOne);

export default roomRouter;
