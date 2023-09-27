export interface UserProps {
  id: string;
  username: string;
  email: string;
  password: string;
}

export class User {
  public id: string;
  public username: string;
  public email: string;
  public password: string;

  constructor(props: UserProps) {
    this.id = props.id;
    this.username = props.username;
    this.email = props.email;
    this.password = props.password;
  }
}
