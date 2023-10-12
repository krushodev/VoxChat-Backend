import type { User } from './user';

export interface MessageProps {
  id: string;
  text: string;
  user: User | string | null;
  date: Date;
}

export class Message {
  public id: string;
  public text: string;
  public user: User | string | null;
  public date: Date;

  constructor(props: MessageProps) {
    this.id = props.id;
    this.text = props.text;
    this.user = props.user;
    this.date = props.date;
  }
}
