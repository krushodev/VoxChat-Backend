import { Message } from './message';
import { User } from './user';

export interface RoomProps {
  id: string;
  name: string;
  topics: string[];
  messages: Message[];
  members: {
    user: User | null;
  }[];
  isPrivate: boolean;
  password: string | null;
}

export class Room {
  public id: string;
  private name: string;
  private topics: string[];
  private messages: Message[];
  private members: {
    user: User | null;
  }[];
  private isPrivate: boolean;
  private password: string | null;

  constructor(props: RoomProps) {
    this.id = props.id;
    this.name = props.name;
    this.topics = props.topics;
    this.messages = props.messages;
    this.members = props.members;
    this.isPrivate = props.isPrivate;
    this.password = props.password;
  }
}
