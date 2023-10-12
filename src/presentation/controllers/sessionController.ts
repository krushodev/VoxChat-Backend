import SessionManager from '../../domain/managers/sessionManager';

import type { NextFunction, Request, Response } from 'express';

class SessionController {
  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const manager = new SessionManager();
      const { accessToken, refreshToken } = await manager.login(req.body);
      res.status(200).send({ status: 'success', message: 'Inicio de sesión exitoso', payload: { accessToken, refreshToken } });
    } catch (err) {
      next(err);
    }
  }

  public static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const manager = new SessionManager();
      await manager.signup(req.body);
      res.status(201).send({ status: 'success', message: 'Registro exitoso' });
    } catch (err) {
      next(err);
    }
  }

  public static async provideRefreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const manager = new SessionManager();
      const accessToken = await manager.resolveRefreshToken(refreshToken);
      res.status(200).send({ status: 'success', message: 'Refresh token resuelto correctamente', payload: { accessToken } });
    } catch (err) {
      next(err);
    }
  }

  public static async updateImage(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const manager = new SessionManager();
      await manager.updateImage({ id, ...req.body });
      res.status(200).send({ status: 'success', message: 'Imagen actualizada correctamente' });
    } catch (err) {
      next(err);
    }
  }
}

export default SessionController;
