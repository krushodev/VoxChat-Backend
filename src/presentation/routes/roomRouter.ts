import { Router } from 'express';

import RoomController from '../controllers/roomController';

const roomRouter = Router();

roomRouter.get('/', RoomController.list);
roomRouter.get('/:id', RoomController.getOne);
roomRouter.post('/', RoomController.createOne);
roomRouter.post('/:id/messages', RoomController.sendMessage);
roomRouter.post('/:rid/add-member/:uid', RoomController.addMember);
roomRouter.put('/:id', RoomController.updateOne);
roomRouter.delete('/:id', RoomController.removeOne);

export default roomRouter;
