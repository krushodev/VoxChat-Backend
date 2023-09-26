import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  const token = authHeader?.split(' ')[1];

  jwt.verify(token!, process.env.JWT_ACCESS_KEY!, (err, credentials) => {
    if (err) res.status(403).send({ status: 'error', message: 'Authentication error' });

    req.user = credentials.user;

    next();
  });
};

export default auth;
