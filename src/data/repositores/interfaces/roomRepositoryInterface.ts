import { Room } from '../../../domain/entities/room';
import { RoomBodyPayload, RoomBodyUpdatePayload } from '../../../shared/types/room';

interface IRoomRepository {
  list: () => Promise<Room[] | null>;
  findOne: (id: string) => Promise<Room | null>;
  saveOne: (data: RoomBodyPayload) => Promise<Room | null>;
  update: (data: RoomBodyUpdatePayload) => Promise<Room | null>;
  delete: (id: string) => Promise<boolean | null>;
}

export default IRoomRepository;
