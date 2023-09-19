import Room from '../../entities/room';

interface IRoomManager {
  list: () => Promise<Room[]>;
  createOne: (data: { name: string; topics: string[]; members: string[] }) => Promise<Room>;
  getOne: (id: string) => Promise<Room>;
}

export default IRoomManager;
