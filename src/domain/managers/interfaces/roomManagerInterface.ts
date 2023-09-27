import type Room from '../../entities/room';

interface IRoomManager {
  list: () => Promise<Room[]>;
  getOne: (id: string) => Promise<Room>;
  createOne: (data: Room) => Promise<Room>;
  updateOne: (data: Room) => Promise<Room>;
  removeOne: (id: string) => Promise<Boolean>;
}

export default IRoomManager;
