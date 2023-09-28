import type { MessageUpdateBodyPayload, RoomBodyPayload, RoomUpdateBodyPayload } from '../../../shared/types/room';
import type { Room } from '../../entities/room';

interface IRoomManager {
  list: () => Promise<Room[]>;
  getOne: (id: string) => Promise<Room>;
  createOne: (data: RoomBodyPayload) => Promise<Room>;
  updateOne: (data: RoomUpdateBodyPayload) => Promise<Room>;
  removeOne: (id: string) => Promise<boolean>;
  insertMessage: (data: MessageUpdateBodyPayload) => Promise<Room>;
}

export default IRoomManager;
