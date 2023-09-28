import type { Room } from '../../../domain/entities/room';
import type { RoomBody, RoomUpdateBody } from '../../../shared/types/room';

interface IRoomRepository {
  list: () => Promise<Room[] | null>;
  findOne: (id: string) => Promise<Room | null>;
  saveOne: (data: RoomBody) => Promise<Room | null>;
  update: (data: RoomUpdateBody) => Promise<Room | null>;
  delete: (id: string) => Promise<boolean | null>;
}

export default IRoomRepository;
