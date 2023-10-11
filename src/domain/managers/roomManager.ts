// @ts-nocheck

import container from '../../container';

import roomAddMessageSchema from '../validations/room/roomAddMessageValidation';
import roomBodyUpdateSchema from '../validations/room/roomBodyUpdateValidation';
import roomBodySchema from '../validations/room/roomBodyValidation';
import idSchema from '../validations/shared/idValidation';

import type IRoomRepository from '../../data/repositores/interfaces/roomRepositoryInterface';
import type { MessageBody, MessageUpdateBodyPayload, RoomBody, RoomBodyPayload, RoomUpdateBodyPayload } from '../../shared/types/room';
import type IRoomManager from './interfaces/roomManagerInterface';
import type IUserRepository from '../../data/repositores/interfaces/userRepositoryInterface';

class RoomManager implements IRoomManager {
  private RoomRepository: IRoomRepository = container.resolve('RoomRepository');
  private UserRepository: IUserRepository = container.resolve('UserRepository');

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

    if (room.owner) {
      console.log(room.owner);
      const user = await this.UserRepository.findOne(room.owner.id);

      if (!user) throw new Error('User not found');

      const newRoomsList = user.rooms.map(item => ({
        room: item.room?.id,
        isOwner: item.isOwner
      }));

      newRoomsList.push({ room: room.id, isOwner: true });

      const result = await this.UserRepository.update({ id: user.id, update: { rooms: newRoomsList } });

      if (!result) throw Error('Error to update user');
    }

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

    const result = await this.RoomRepository.update({ id, update: { messages: newMessageList as MessageBody[] } as RoomBody });

    if (!result) throw new Error('Error to send message');

    return result;
  }

  public async listMessages(id: string) {
    const rid = await idSchema.parseAsync(id);

    const room = await this.RoomRepository.findOne(rid);

    if (!room) throw new Error('Room not found');

    return room.messages;
  }

  public async insertMember(data: { rid: string; uid: string }) {
    const rid = await idSchema.parseAsync(data.rid);
    const uid = await idSchema.parseAsync(data.uid);

    const room = await this.RoomRepository.findOne(rid);

    if (!room) throw new Error('Room not found');

    const user = await this.UserRepository.findOne(uid);

    if (!user) throw new Error('User not found');

    const newMembersList = room.members.map(member => ({
      user: member.user?.id!
    }));

    const newRoomsList = user.rooms.map(item => ({
      room: item.room?.id,
      isOwner: item.isOwner
    }));

    const userIsInList = newMembersList.some(member => member.user === user.id);

    if (userIsInList) throw new Error('User is already in the room');

    newMembersList.push({ user: user.id });

    newRoomsList.push({ room: room.id, isOwner: false });

    const result = (async () => {
      await this.RoomRepository.update({ id: rid, update: { members: newMembersList } as RoomBody });
      await this.UserRepository.update({ id: uid, update: { rooms: newRoomsList } });
    })();

    if (!result) throw new Error('Error to insert member');

    return result;
  }
}

export default RoomManager;
