import UserModel from '../models/userModel';

import { User } from '../../domain/entities/user';

import type IUserRepository from './interfaces/userRepositoryInterface';

class UserMongooseRespository implements IUserRepository {
  public async list() {
    const usersDocs = await UserModel.find();

    return usersDocs.length > 0
      ? usersDocs.map(
          userDoc =>
            new User({
              id: userDoc._id,
              username: userDoc.username,
              email: userDoc.email,
              image: userDoc.image,
              password: userDoc.password,
              rooms: userDoc.rooms.map(item => ({
                id: item._id,
                room: item.room,
                isOwner: item.isOwner
              }))
            })
        )
      : null;
  }

  public async findOne(id: string) {
    const userDoc = await UserModel.findById(id);

    return userDoc
      ? new User({
          id: userDoc._id,
          username: userDoc.username,
          email: userDoc.email,
          image: userDoc.image,
          password: userDoc.password,
          rooms: userDoc.rooms.map(item => ({
            id: item._id,
            room: item.room,
            isOwner: item.isOwner
          }))
        })
      : null;
  }

  public async findOneByEmail(data: string) {
    const userDoc = await UserModel.findOne({ email: data });

    return userDoc
      ? new User({
          id: userDoc._id,
          username: userDoc.username,
          email: userDoc.email,
          image: userDoc.image,
          password: userDoc.password,
          rooms: userDoc.rooms.map(item => ({
            id: item._id,
            room: item.room,
            isOwner: item.isOwner
          }))
        })
      : null;
  }

  public async saveOne(data: UserBody) {
    const newUserDoc = new UserModel(data);
    const userDoc = await newUserDoc.save();

    return userDoc
      ? new User({
          id: userDoc._id,
          username: userDoc.username,
          email: userDoc.email,
          image: userDoc.image,
          password: userDoc.password,
          rooms: userDoc.rooms.map(item => ({
            id: item._id,
            room: item.room,
            isOwner: item.isOwner
          }))
        })
      : null;
  }

  public async update(data: UserUpdateBody) {
    const { id, update } = data;

    const userDoc = await UserModel.findByIdAndUpdate(id, update, { new: true });

    return userDoc
      ? new User({
          id: userDoc._id,
          username: userDoc.username,
          email: userDoc.email,
          image: userDoc.image,
          password: userDoc.password,
          rooms: userDoc.rooms.map(item => ({
            id: item._id,
            room: item.room,
            isOwner: item.isOwner
          }))
        })
      : null;
  }

  public async remove(id: string) {
    const userDoc = await UserModel.findByIdAndRemove(id);

    return userDoc ? true : null;
  }
}

export default UserMongooseRespository;
