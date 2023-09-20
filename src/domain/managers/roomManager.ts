import container from '../../container';
import IRoomRepository from '../../data/repositores/interfaces/roomRepositoryInterface';

import type { RoomProps } from '../../types';
import type IRoomManager from './interfaces/roomManagerInterface';

class RoomManager implements IRoomManager {
  private RoomRepository: IRoomRepository = container.resolve('RoomRepository');

  public async list() {
    const rooms = await this.RoomRepository.list();

    if (!rooms) throw new Error('Rooms not found');

    return rooms;
  }

  public async getOne(id: string) {
    const room = await this.RoomRepository.findOne(id);

    if (!room) throw new Error('Room not found');

    return room;
  }

  public async createOne(data: RoomProps) {
    const room = await this.RoomRepository.saveOne(data);

    if (!room) throw new Error('Room not found');

    return room;
  }
}

export default RoomManager;
