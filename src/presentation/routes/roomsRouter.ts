import { Router } from "express";

import RoomsController from "../controllers/roomsController";

const roomsRouter = Router();

roomsRouter.get("/", RoomsController.list);
roomsRouter.get("/:id", RoomsController.getOne);
roomsRouter.post("/", RoomsController.createOne);

export default roomsRouter;
