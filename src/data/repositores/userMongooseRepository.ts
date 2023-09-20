import { UserProps } from '../../types';
import UserModel from '../models/userModel';

import type IUserRepository from './interfaces/userRepositoryInterface';

class UserMongooseRespository implements IUserRepository {
  public async list() {
    const usersDocs = await UserModel.find();

    return usersDocs.length > 0
      ? usersDocs.map(userDoc => ({
          id: userDoc._id,
          firstName: userDoc.firstName,
          lastName: userDoc.lastName,
          email: userDoc.email
        }))
      : null;
  }

  public async findOne(id: string) {
    const userDoc = await UserModel.findById(id);

    return userDoc
      ? {
          id: userDoc._id,
          firstName: userDoc.firstName,
          lastName: userDoc.lastName,
          email: userDoc.email
        }
      : null;
  }

  public async saveOne(data: UserProps) {
    const newUserDoc = new UserModel(data);
    const userDoc = await newUserDoc.save();

    return userDoc
      ? {
          id: userDoc._id,
          firstName: userDoc.firstName,
          lastName: userDoc.lastName,
          email: userDoc.email
        }
      : null;
  }
}

export default UserMongooseRespository;
