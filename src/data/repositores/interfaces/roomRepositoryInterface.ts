import type Room from '../../../domain/entities/room';

interface IRoomRepository {
  list: () => Promise<Room[] | null>;
  findOne: (id: string) => Promise<Room | null>;
  saveOne: (data: Room) => Promise<Room | null>;
  update: (data: Room) => Promise<Room | null>;
  delete: (id: string) => Promise<Boolean | null>;
}

export default IRoomRepository;
