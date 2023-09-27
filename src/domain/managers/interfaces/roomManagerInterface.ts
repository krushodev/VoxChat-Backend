import { IMessage } from '../../../types';
import type Room from '../../entities/room';

interface IRoomManager {
  list: () => Promise<Room[]>;
  getOne: (id: string) => Promise<Room>;
  createOne: (data: RoomBodyPayload) => Promise<Room>;
  updateOne: (data: RoomBodyUpdatePayload) => Promise<Room>;
  removeOne: (id: string) => Promise<boolean>;
  /* insertMessage: (data: { id: string; data: IMessage }) => any; */
}

export default IRoomManager;
