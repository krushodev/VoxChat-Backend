export interface UserBodyPayload {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
}

export interface UserBodyUpdatePayload {
  id?: string;
  update?: UserBodyPayload;
}
