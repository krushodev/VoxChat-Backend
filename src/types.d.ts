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
