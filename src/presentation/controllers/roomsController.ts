import { Request, Response } from "express";

import RoomManager from "../../domain/managers/RoomManager";

class RoomsController {
    public static async list(req: Request, res: Response) {
        try {
            const manager = new RoomManager();
            const result = await manager.list();
            res.status(200).send({ status: "success", data: result });
        } catch (err) {
            console.log(err);
        }
    }

    public static async getOne(req: Request, res: Response) {
        try {
            const manager = new RoomManager();
            const result = await manager.getOne();
            res.status(200).send({ status: "success", data: result });
        } catch (err) {
            console.log(err);
        }
    }

    public static async createOne(req: Request, res: Response) {
        try {
            const manager = new RoomManager();
            const result = await manager.createOne();
            res.status(201).send({ status: "success", data: result });
        } catch (err) {
            console.log(err);
        }
    }
}

export default RoomsController;
