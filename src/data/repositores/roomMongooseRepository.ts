import RoomModel from '../models/roomModel';

import type { RoomProps } from '../../types';
import type IRoomRepository from './interfaces/roomRepositoryInterface';

class RoomMongooseRespository implements IRoomRepository {
  public async list() {
    const roomsDocs = await RoomModel.find();

    return roomsDocs.length > 0
      ? roomsDocs.map(roomDoc => ({
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members,
          messages: roomDoc.messages.map(message => ({
            id: message._id,
            text: message.text,
            user: {
              id: message.user._id,
              name: message.user.name,
              image: message.user.image
            },
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
          members: roomDoc.members,
          messages: roomDoc.messages.map(message => ({
            id: message._id,
            text: message.text,
            user: {
              id: message.user._id,
              name: message.user.name,
              image: message.user.image
            },
            date: message.date
          })),
          isPrivate: roomDoc.isPrivate,
          password: roomDoc.password
        }
      : null;
  }

  public async saveOne(data: RoomProps) {
    const newRoomDoc = new RoomModel(data);
    const roomDoc = await newRoomDoc.save();

    return roomDoc
      ? {
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members,
          messages: roomDoc.messages.map(message => ({
            id: message._id,
            text: message.text,
            user: {
              id: message.user._id,
              name: message.user.name,
              image: message.user.image
            },
            date: message.date
          })),
          isPrivate: roomDoc.isPrivate,
          password: roomDoc.password
        }
      : null;
  }
}

export default RoomMongooseRespository;
