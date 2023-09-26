export type RoomProps = {
  name: string;
  topics: string[];
  members: string[];
  messages: [
    {
      text: string;
      user: string;
    }
  ];
  isPrivate?: boolean;
  password?: string;
};

export type UserProps = {
  firstName: string;
  lastName: string[];
  gmail: string;
};

export interface IMessage {
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
    image: string;
  };
  date: Date;
}

export interface UserBody {
  id: string;
  username: string;
  email: string;
  password: undefined;
}

export interface RequestWithUser extends Request {
  user?: UserBody;
}

export interface ResponseJWT {
  user: UserBody;
}
