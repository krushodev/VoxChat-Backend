import Room from '../../../domain/entities/room';

interface IRoomRepository {
  list: () => Promise<Room[] | null>;
  findOne: (id: string) => Promise<Room | null>;
  saveOne: (data: { name: string; topics: string[]; members: string[] }) => Promise<Room | null>;
}

export default IRoomRepository;
