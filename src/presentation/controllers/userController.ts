import UserManager from '../../domain/managers/userManager';

import type { NextFunction, Request, Response } from 'express';

class UserController {
  public static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const manager = new UserManager();
      const result = await manager.list();
      res.status(200).send({ status: 'success', payload: result });
    } catch (err) {
      next(err);
    }
  }

  public static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const manager = new UserManager();
      const result = await manager.getOne(id);
      res.status(200).send({ status: 'success', payload: result });
    } catch (err) {
      next(err);
    }
  }

  public static async createOne(req: Request, res: Response, next: NextFunction) {
    try {
      const manager = new UserManager();
      const result = await manager.createOne(req.body);
      res.status(201).send({ status: 'success', payload: result, message: 'Usurio creado correctamente' });
    } catch (err) {
      next(err);
    }
  }

  public static async updateOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const manager = new UserManager();
      const result = await manager.updateOne({ id, update: req.body });
      res.status(200).send({ status: 'success', payload: result, message: 'Usuario actualizado correctamente' });
    } catch (err) {
      next(err);
    }
  }

  public static async removeOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const manager = new UserManager();
      await manager.removeOne(id);
      res.status(200).send({ status: 'success', message: 'Usuario eliminado correctamente' });
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
