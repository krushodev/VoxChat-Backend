import UserModel from '../models/userModel';

import type IUserRepository from './interfaces/userRepositoryInterface';
import type User from '../../domain/entities/user';

class UserMongooseRespository implements IUserRepository {
  public async list() {
    const usersDocs = await UserModel.find();

    return usersDocs.length > 0
      ? usersDocs.map(userDoc => ({
          id: userDoc._id,
          username: userDoc.username,
          email: userDoc.email,
          password: userDoc.password
        }))
      : null;
  }

  public async findOne(id: string) {
    const userDoc = await UserModel.findById(id);

    return userDoc
      ? {
          id: userDoc._id,
          username: userDoc.username,
          email: userDoc.email,
          password: userDoc.password
        }
      : null;
  }

  public async findOneByEmail(data: string) {
    const userDoc = await UserModel.findOne({ email: data });

    return userDoc
      ? {
          id: userDoc._id,
          username: userDoc.username,
          email: userDoc.email,
          password: userDoc.password
        }
      : null;
  }

  public async saveOne(data: User) {
    const newUserDoc = new UserModel(data);
    const userDoc = await newUserDoc.save();

    return userDoc
      ? {
          id: userDoc._id,
          username: userDoc.username,
          email: userDoc.email,
          password: userDoc.password
        }
      : null;
  }
}

export default UserMongooseRespository;
