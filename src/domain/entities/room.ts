import type { Message } from './message';
import type { User } from './user';

export interface RoomProps {
  id: string;
  name: string;
  topics: string[];
  messages: Message[];
  members: {
    user: User | string | null;
  }[];
  owner: string | null;
  isPrivate: boolean;
  password: string | null;
}

export class Room {
  public id: string;
  public name: string;
  public topics: string[];
  public messages: Message[];
  public members: {
    user: User | string | null;
  }[];
  public owner: string | null;
  public isPrivate: boolean;
  public password: string | null;

  constructor(props: RoomProps) {
    this.id = props.id;
    this.name = props.name;
    this.topics = props.topics;
    this.messages = props.messages;
    this.members = props.members;
    this.owner = props.owner;
    this.isPrivate = props.isPrivate;
    this.password = props.password;
  }
}
