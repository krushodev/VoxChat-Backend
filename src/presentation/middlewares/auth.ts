import jwt from 'jsonwebtoken';

import type { NextFunction, Response } from 'express';
import type { RequestWithUser, ResponseJWT } from '../../types';

const auth = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ status: 'error', error: 'Authentication error' });

  const token = authHeader?.split(' ')[1];

  jwt.verify(token!, process.env.JWT_ACCESS_KEY!, (err, credentials) => {
    if (err) return res.status(401).send({ status: 'error', error: 'Authentication error' });

    req.user = (credentials as ResponseJWT).user;

    next();
  });
};

export default auth;
