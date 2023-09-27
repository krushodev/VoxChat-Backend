import { Message } from '../../domain/entities/message';
import { Room } from '../../domain/entities/room';
import { User, type UserProps } from '../../domain/entities/user';
import RoomModel from '../models/roomModel';

import type IRoomRepository from './interfaces/roomRepositoryInterface';

class RoomMongooseRespository implements IRoomRepository {
  public async list() {
    const roomsDocs = await RoomModel.find();

    return roomsDocs.length > 0
      ? roomsDocs.map(
          roomDoc =>
            new Room({
              id: roomDoc._id,
              name: roomDoc.name,
              topics: roomDoc.topics,
              members: roomDoc.members.map(member => ({
                user: member.user ? new User(member.user as unknown as UserProps) : null
              })),
              messages: roomDoc.messages.map(
                message =>
                  new Message({
                    id: message._id,
                    text: message.text,
                    user: message.user ? new User(message.user as unknown as UserProps) : null,
                    date: message.date
                  })
              ),
              isPrivate: roomDoc.isPrivate,
              password: roomDoc.password
            })
        )
      : null;
  }

  public async findOne(id: string) {
    const roomDoc = await RoomModel.findById(id);

    return roomDoc
      ? new Room({
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members.map(member => ({
            user: member.user ? new User(member.user as unknown as UserProps) : null
          })),
          messages: roomDoc.messages.map(
            message =>
              new Message({
                id: message._id,
                text: message.text,
                user: message.user ? new User(message.user as unknown as UserProps) : null,
                date: message.date
              })
          ),
          isPrivate: roomDoc.isPrivate,
          password: roomDoc.password
        })
      : null;
  }

  public async saveOne(data: RoomBodyPayload) {
    const newRoomDoc = new RoomModel(data);
    const roomDoc = await newRoomDoc.save();

    return roomDoc
      ? new Room({
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members.map(member => ({
            user: member.user ? new User(member.user as unknown as UserProps) : null
          })),
          messages: roomDoc.messages.map(
            message =>
              new Message({
                id: message._id,
                text: message.text,
                user: message.user ? new User(message.user as unknown as UserProps) : null,
                date: message.date
              })
          ),
          isPrivate: roomDoc.isPrivate,
          password: roomDoc.password
        })
      : null;
  }

  public async update(data: RoomBodyUpdatePayload) {
    const { id, update } = data;

    const roomDoc = await RoomModel.findByIdAndUpdate(id, update, { new: true });

    return roomDoc
      ? new Room({
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members.map(member => ({
            user: member.user ? new User(member.user as unknown as UserProps) : null
          })),
          messages: roomDoc.messages.map(
            message =>
              new Message({
                id: message._id,
                text: message.text,
                user: message.user ? new User(message.user as unknown as UserProps) : null,
                date: message.date
              })
          ),
          isPrivate: roomDoc.isPrivate,
          password: roomDoc.password
        })
      : null;
  }

  public async delete(id: string) {
    const roomDoc = await RoomModel.findByIdAndRemove(id);

    return roomDoc ? true : null;
  }
}
export default RoomMongooseRespository;
