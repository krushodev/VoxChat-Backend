import { Room } from './room';

export interface UserProps {
  id: string;
  username: string;
  email: string;
  image: string | null;
  password: string;
  rooms: { room: Room | null; isOwner: boolean }[];
}

export class User {
  public id: string;
  public username: string;
  public email: string;
  public image: string | null;
  public password: string;
  public rooms: { room: Room | null; isOwner: boolean }[];

  constructor(props: UserProps) {
    console.log(props);

    this.id = props.id;
    this.username = props.username;
    this.email = props.email;
    this.image = props.image;
    this.password = props.password;
    this.rooms = props.rooms;
  }
}
