// @ts-nocheck
import container from '../../container';

import roomAddMessageSchema from '../validations/room/roomAddMessageValidation';
import roomBodyUpdateSchema from '../validations/room/roomBodyUpdateValidation';
import roomBodySchema from '../validations/room/roomBodyValidation';
import idSchema from '../validations/shared/idValidation';

import type IRoomRepository from '../../data/repositores/interfaces/roomRepositoryInterface';
import type { MessageBody, MessageUpdateBodyPayload, RoomBody, RoomBodyPayload, RoomUpdateBodyPayload } from '../../shared/types/room';
import type IRoomManager from './interfaces/roomManagerInterface';

class RoomManager implements IRoomManager {
  private RoomRepository: IRoomRepository = container.resolve('RoomRepository');

  public async list() {
    const rooms = await this.RoomRepository.list();

    if (!rooms) throw new Error('Rooms not found');

    return rooms;
  }

  public async getOne(id: string) {
    const rid = await idSchema.parseAsync(id);

    const room = await this.RoomRepository.findOne(rid);

    if (!room) throw new Error('Room not found');

    return room;
  }

  public async createOne(data: RoomBodyPayload) {
    const dataValidated = await roomBodySchema.parseAsync(data);

    const room = await this.RoomRepository.saveOne(dataValidated);

    if (!room) throw new Error('Room not found');

    return room;
  }

  public async updateOne(data: RoomUpdateBodyPayload) {
    const { id, update } = await roomBodyUpdateSchema.parseAsync(data);

    const room = await this.RoomRepository.update({ id, update });

    if (!room) throw new Error('Room not found');

    return room;
  }

  public async removeOne(id: string) {
    const rid = await idSchema.parseAsync(id);

    const result = await this.RoomRepository.delete(rid);

    if (!result) throw new Error('Room not found');

    return result;
  }

  public async insertMessage(data: MessageUpdateBodyPayload) {
    const { id, message } = await roomAddMessageSchema.parseAsync(data);

    const room = await this.RoomRepository.findOne(id);

    if (!room) throw new Error('Room not found');

    const newMessageList = room.messages.map(item => ({
      id: item.id,
      text: item.text,
      date: item.date,
      user: item.user?.id
    }));

    newMessageList.push(message);

    const result = await this.RoomRepository.update({ id, update: { messages: newMessageList } });

    if (!result) throw new Error('Error to send message');

    return result;
  }

  public async listMessages(id: string) {
    const rid = await idSchema.parseAsync(id);

    const room = await this.RoomRepository.findOne(rid);

    if (!room) throw new Error('Room not found');

    return room.messages;
  }
}

export default RoomManager;
