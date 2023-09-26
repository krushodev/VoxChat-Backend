import type { IMessage } from '../../types';
import type User from './user';

interface Room {
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

export default Room;
