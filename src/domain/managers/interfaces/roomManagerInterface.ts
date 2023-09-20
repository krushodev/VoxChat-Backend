import type { RoomProps } from '../../../types';
import type Room from '../../entities/room';

interface IRoomManager {
  list: () => Promise<Room[]>;
  createOne: (data: RoomProps) => Promise<Room>;
  getOne: (id: string) => Promise<Room>;
}

export default IRoomManager;
