export interface UserProps {
  id: string;
  username: string;
  email: string;
  image: string | null;
  password: string;
  rooms: { id: string; room: string | null; isOwner: boolean }[];
}

export class User {
  public id: string;
  public username: string;
  public email: string;
  public image: string | null;
  public password: string;
  public rooms: { id: string; room: string | null; isOwner: boolean }[];

  constructor(props: UserProps) {
    this.id = props.id;
    this.username = props.username;
    this.email = props.email;
    this.image = props.image;
    this.password = props.password;
    this.rooms = props.rooms;
  }
}
