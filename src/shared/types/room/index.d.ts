import { Message } from '../../../domain/entities/message';
import { User } from '../../../domain/entities/user';

interface RoomBodyPayload {
  id: string;
  name: string;
  topics: string[];
  messages: Message[] | [];
  members: {
    user: User | string;
  }[];
  isPrivate: boolean;
  password: string | null;
}

interface RoomBodyUpdatePayload {
  id: string;
  update: RoomBodyPayload;
}

interface MessageBodyPayload {
  id: string;
  message: Message;
}
