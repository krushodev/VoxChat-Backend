import container from '../../container';

import { generateHash } from '../../shared';

import type IUserRepository from '../../data/repositores/interfaces/userRepositoryInterface';
import type IUserManager from './interfaces/userManagerInterface';
import { UserBodyPayload, UserBodyUpdatePayload } from '../../shared/types/user';
import idSchema from '../validations/shared/idValidation';
import userBodySchema from '../validations/user/userBodyValidation';
import userBodyUpdateSchema from '../validations/user/userBodyUpdateValidation';

class UserManager implements IUserManager {
  private UserRepository: IUserRepository = container.resolve('UserRepository');

  public async list() {
    const users = await this.UserRepository.list();

    if (!users) throw new Error('Users not found');

    return users;
  }

  public async getOne(id: string) {
    const uid = await idSchema.parseAsync(id);

    const user = await this.UserRepository.findOne(uid);

    if (!user) throw new Error('User not found');

    return user;
  }

  public async createOne(data: UserBodyPayload) {
    const dataValidated = await userBodySchema.parseAsync(data);

    const hashedPassword = await generateHash(dataValidated.password!);

    const user = await this.UserRepository.saveOne({ ...dataValidated, password: hashedPassword });

    if (!user) throw new Error('User not found');

    return user;
  }

  public async updateOne(data: UserBodyUpdatePayload) {
    const { id, update } = await userBodyUpdateSchema.parseAsync(data);

    const user = await this.UserRepository.update({ id, update });

    if (!user) throw new Error('User not found');

    return user;
  }

  public async removeOne(id: string) {
    const uid = await idSchema.parseAsync(id);

    const result = await this.UserRepository.remove(uid);

    if (!result) throw new Error('User not found');

    return result;
  }
}

export default UserManager;
