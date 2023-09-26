import type Room from '../../../domain/entities/room';

interface IRoomRepository {
  list: () => Promise<Room[] | null>;
  findOne: (id: string) => Promise<Room | null>;
  saveOne: (data: Room) => Promise<Room | null>;
}

export default IRoomRepository;
