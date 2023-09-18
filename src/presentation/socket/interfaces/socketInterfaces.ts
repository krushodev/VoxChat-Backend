export interface IMessage {
  id: string;
  user: {
    id: string;
    name: string;
    image: string;
  };
  date: Date;
  message: string;
}
