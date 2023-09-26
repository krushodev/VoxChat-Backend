import type { Request, Response } from 'express';

import SessionManager from '../../domain/managers/sessionManager';
import { RequestWithUser } from '../../types';

class SessionController {
  public static async login(req: Request, res: Response) {
    try {
      const manager = new SessionManager();
      const { accessToken, refreshToken } = await manager.login(req.body);
      res.status(200).send({ status: 'success', message: 'Te has logueado correctamente', payload: { accessToken, refreshToken } });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }

  public static async signup(req: Request, res: Response) {
    try {
      const manager = new SessionManager();
      await manager.signup(req.body);
      res.status(201).send({ status: 'success', message: 'Te has registrado correctamente' });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }

  public static async private(req: RequestWithUser, res: Response) {
    try {
      const { user } = req;
      res.status(200).send({ status: 'success', payload: user });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }

  public static async provideRefreshToken(req: Request, res: Response) {
    try {
      const { refreshToken } = req.body;
      const manager = new SessionManager();
      const accessToken = await manager.resolveRefreshToken(refreshToken);
      res.status(200).send({ status: 'success', message: 'Has renovado tu refresh token', payload: { accessToken } });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: 'erorr', mesagge: 'Something went wrong' });
    }
  }
}

export default SessionController;
