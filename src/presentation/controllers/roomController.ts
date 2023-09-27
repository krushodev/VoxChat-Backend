import type { Request, Response } from 'express';

import RoomManager from '../../domain/managers/roomManager';

class RoomController {
  public static async list(req: Request, res: Response) {
    try {
      const manager = new RoomManager();
      const result = await manager.list();
      res.status(200).send({ status: 'success', data: result });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }

  public static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const manager = new RoomManager();
      const result = await manager.getOne(id);
      res.status(200).send({ status: 'success', data: result });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }

  public static async createOne(req: Request, res: Response) {
    try {
      const manager = new RoomManager();
      const result = await manager.createOne(req.body);
      res.status(201).send({ status: 'success', data: result, message: 'Room created successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }

  public static async updateOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const manager = new RoomManager();
      const result = await manager.updateOne({ id, update: req.body });
      res.status(200).send({ status: 'success', data: result, message: 'Room updated successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }

  public static async removeOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const manager = new RoomManager();
      await manager.removeOne(id);
      res.status(200).send({ status: 'success', message: 'Room deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }

  public static async sendMessage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const manager = new RoomManager();
      await manager.insertMessage({ id, message: req.body });
      res.status(200).send({ status: 'success', message: 'Message sended to the room successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }
}

export default RoomController;
