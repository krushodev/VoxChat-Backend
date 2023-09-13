import { Router } from "express";

import RoomsController from "../controllers/roomsController";

const roomsRouter = Router();

roomsRouter.post("/", RoomsController.createOne);

export default roomsRouter;
