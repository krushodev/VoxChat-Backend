import type { Request } from 'express';
import type { User } from './domain/entities/user';
import type { JwtPayload } from 'jsonwebtoken';

export interface RequestWithUser extends Request {
  user?: User;
}

export interface ResponseJWT extends JwtPayload {
  user: User;
}

export interface UserLoginProps {
  email: string;
  password: string;
}
