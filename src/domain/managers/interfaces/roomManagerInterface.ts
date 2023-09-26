import type Room from '../../entities/room';

interface IRoomManager {
  list: () => Promise<Room[]>;
  getOne: (id: string) => Promise<Room>;
  createOne: (data: Room) => Promise<Room>;
}

export default IRoomManager;
