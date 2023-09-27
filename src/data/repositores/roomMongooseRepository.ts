import RoomModel from '../models/roomModel';

import type Room from '../../domain/entities/room';
import type IRoomRepository from './interfaces/roomRepositoryInterface';

class RoomMongooseRespository implements IRoomRepository {
  public async list() {
    const roomsDocs = await RoomModel.find();

    return roomsDocs.length > 0
      ? roomsDocs.map(roomDoc => ({
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members.map(member => ({
            user: member.user
          })),
          messages: roomDoc.messages.map(message => ({
            id: message._id,
            text: message.text,
            user: message.user,
            date: message.date
          })),
          isPrivate: roomDoc.isPrivate,
          password: roomDoc.password
        }))
      : null;
  }

  public async findOne(id: string) {
    const roomDoc = await RoomModel.findById(id);

    return roomDoc
      ? {
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members.map(member => ({
            user: member.user
          })),
          messages: roomDoc.messages.map(message => ({
            id: message._id,
            text: message.text,
            user: message.user,
            date: message.date
          })),
          isPrivate: roomDoc.isPrivate,
          password: roomDoc.password
        }
      : null;
  }

  public async saveOne(data: Room) {
    const newRoomDoc = new RoomModel(data);
    const roomDoc = await newRoomDoc.save();

    return roomDoc
      ? {
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members.map(member => ({
            user: member.user
          })),
          messages: roomDoc.messages.map(message => ({
            id: message._id,
            text: message.text,
            user: message.user,
            date: message.date
          })),
          isPrivate: roomDoc.isPrivate,
          password: roomDoc.password
        }
      : null;
  }

  public async update(data: Room) {
    const { id, ...rest } = data;

    const roomDoc = await RoomModel.findByIdAndUpdate(id, rest, { new: true });

    return roomDoc
      ? {
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members.map(member => ({
            user: member.user
          })),
          messages: roomDoc.messages.map(message => ({
            id: message._id,
            text: message.text,
            user: message.user,
            date: message.date
          })),
          isPrivate: roomDoc.isPrivate,
          password: roomDoc.password
        }
      : null;
  }

  public async delete(id: string) {
    const roomDoc = await RoomModel.findByIdAndRemove(id);

    return roomDoc ? true : null;
  }
}
export default RoomMongooseRespository;
