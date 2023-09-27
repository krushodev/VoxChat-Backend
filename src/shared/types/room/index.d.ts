/* import User from '../../../domain/entities/user';
import { IMessage } from '../../../types'; */

interface RoomBodyPayload {
  id: string;
  name: string;
  topics: string[];
  messages: IMessage[] | [];
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
