import type { User, UserProps } from './user';

export interface MessageProps {
  id: string;
  text: string;
  user: User | null;
  date: Date;
}

export class Message {
  public id: string;
  private text: string;
  private user: User | null;
  private date: Date;

  constructor(props: MessageProps) {
    this.id = props.id;
    this.text = props.text;
    this.user = props.user;
    this.date = props.date;
  }
}
