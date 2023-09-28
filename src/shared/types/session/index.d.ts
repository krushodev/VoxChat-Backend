export interface RequestWithUser extends Request {
  user?: User;
}

export interface ResponseJWT {
  user: User;
}

export interface UserLoginProps {
  email?: string;
  password?: string;
}
