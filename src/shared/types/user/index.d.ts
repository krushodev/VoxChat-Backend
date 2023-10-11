interface UserBody {
  id?: string;
  username: string;
  email: string;
  image: string | null;
  password: string;
  rooms: { room: string; isOwner: boolean }[];
}

interface UserUpdateBody {
  id: string;
  update: UserBodyPayload;
}

interface UserBodyPayload extends UserBody<Partial> {}
interface UserUpdateBodyPayload extends UserUpdateBody<Partial> {}
