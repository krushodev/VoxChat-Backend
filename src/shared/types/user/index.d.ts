interface UserBody {
  id?: string;
  username: string;
  email: string;
  password: string;
}

interface UserUpdateBody {
  id: string;
  update: UserBodyPayload;
}

interface UserBodyPayload extends UserBody<Partial> {}
interface UserUpdateBodyPayload extends UserUpdateBody<Partial> {}
