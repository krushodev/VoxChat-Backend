import type Room from '../../../domain/entities/room';
import type { RoomProps } from '../../../types';

interface IRoomRepository {
  list: () => Promise<Room[] | null>;
  findOne: (id: string) => Promise<Room | null>;
  saveOne: (data: RoomProps) => Promise<Room | null>;
}

export default IRoomRepository;
