import RoomManager from '../../domain/managers/roomManager';

import type { Request, Response, NextFunction } from 'express';

class RoomController {
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const manager = new RoomManager();
      const result = await manager.list();
      res.status(200).send({ status: 'success', payload: result });
    } catch (err) {
      next(err);
    }
  }

  public static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const manager = new RoomManager();
      const result = await manager.getOne(id);
      res.status(200).send({ status: 'success', payload: result });
    } catch (err) {
      next(err);
    }
  }

  public static async createOne(req: Request, res: Response, next: NextFunction) {
    try {
      const manager = new RoomManager();
      const result = await manager.createOne(req.body);
      res.status(201).send({ status: 'success', payload: result, message: 'Room creada correctamente' });
    } catch (err) {
      next(err);
    }
  }

  public static async updateOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const manager = new RoomManager();
      const result = await manager.updateOne({ id, update: req.body });
      res.status(200).send({ status: 'success', payload: result, message: 'Room actualizada correctamente' });
    } catch (err) {
      next(err);
    }
  }

  public static async removeOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const manager = new RoomManager();
      await manager.removeOne(id);
      res.status(200).send({ status: 'success', message: 'Room eliminada correctamente' });
    } catch (err) {
      next(err);
    }
  }

  public static async sendMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const manager = new RoomManager();
      const result = await manager.insertMessage({ id, message: req.body });
      res.status(201).send({ status: 'success', message: 'Mensaje enviado correctamente', payload: result });
    } catch (err) {
      next(err);
    }
  }

  public static async addMember(req: Request, res: Response, next: NextFunction) {
    try {
      const { rid, uid } = req.params;
      const manager = new RoomManager();
      await manager.insertMember({ rid, uid });
      res.status(200).send({ status: 'success', message: 'Usuario añadido correctamente' });
    } catch (err) {
      next(err);
    }
  }
}

export default RoomController;
