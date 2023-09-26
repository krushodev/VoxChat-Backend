import type { Request } from 'express';
import type User from './domain/entities/user';

export interface IMessage {
  id: string;
  text: string;
  user: User | string;
  date: Date;
}

export interface RequestWithUser extends Request {
  user?: User;
}

export interface ResponseJWT {
  user: User;
}

export interface UserLoginProps {
  email: string;
  password: string;
}
