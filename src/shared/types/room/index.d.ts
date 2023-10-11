import type { Message } from '../../../domain/entities/message';
import type { User } from '../../../domain/entities/user';
import type { UserBodyPayload } from '../user';

interface RoomBody {
  id?: string;
  name: string;
  topics: string[];
  messages: MessageBody[];
  members: {
    user: string;
  }[];
  owner: string;
  isPrivate: boolean;
  password: string | null;
}

interface RoomUpdateBody {
  id: string;
  update: RoomBody;
}

interface MessageBody {
  id?: string;
  text: string;
  user: string;
  date: Date;
}

interface MessageUpdateBody {
  id: string;
  message: MessageBody;
}

interface RoomBodyPayload extends RoomBody<Partial> {}
interface RoomUpdateBodyPayload extends RoomUpdateBody<Partial> {}
interface MessageBodyPayload extends MessageBody<Partial> {}
interface MessageUpdateBodyPayload extends MessageUpdateBody<Partial> {}
