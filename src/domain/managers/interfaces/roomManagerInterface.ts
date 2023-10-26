import type { Room } from '../../entities/room';
import type { Message } from '../../entities/message';
import type { MessageUpdateBodyPayload, RoomBodyPayload, RoomUpdateBodyPayload } from '../../../shared/types/room';

interface IRoomManager {
  list: () => Promise<Room[]>;
  getOne: (id: string) => Promise<Room>;
  createOne: (data: RoomBodyPayload) => Promise<Room>;
  updateOne: (data: RoomUpdateBodyPayload) => Promise<Room>;
  removeOne: (id: string) => Promise<boolean>;
  insertMessage: (data: MessageUpdateBodyPayload) => Promise<Message>;
}

export default IRoomManager;
