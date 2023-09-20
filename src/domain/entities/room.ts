import { IMessage } from '../../types';

interface Room {
  id: string;
  name: string;
  topics: string[];
  messages: IMessage[];
  members: string[];
}

export default Room;
