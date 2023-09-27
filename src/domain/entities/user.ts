export interface UserProps {
  id: string;
  username: string;
  email: string;
  password: string;
}

export class User {
  public id: string;
  private username: string;
  private email: string;
  private password: string;

  constructor(props: UserProps) {
    this.id = props.id;
    this.username = props.username;
    this.email = props.email;
    this.password = props.password;
  }
}
