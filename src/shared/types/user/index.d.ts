interface UserBodyPayload {
  id: string;
  username: string;
  email: string;
  password: string;
}

interface UserBodyUpdatePayload {
  id: string;
  update: UserBodyPayload;
}
