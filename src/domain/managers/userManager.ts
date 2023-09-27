import container from '../../container';

import { generateHash } from '../../shared';

import type IUserRepository from '../../data/repositores/interfaces/userRepositoryInterface';
import type IUserManager from './interfaces/userManagerInterface';

class UserManager implements IUserManager {
  private UserRepository: IUserRepository = container.resolve('UserRepository');

  public async list() {
    const users = await this.UserRepository.list();

    if (!users) throw new Error('Users not found');

    return users;
  }

  public async getOne(id: string) {
    const user = await this.UserRepository.findOne(id);

    if (!user) throw new Error('User not found');

    return user;
  }

  public async createOne(data: UserBodyPayload) {
    const hashedPassword = await generateHash(data.password!);

    const user = await this.UserRepository.saveOne({ ...data, password: hashedPassword });

    if (!user) throw new Error('User not found');

    return user;
  }

  public async updateOne(data: UserBodyUpdatePayload) {
    const user = await this.UserRepository.update({ id: data.id, update: data.update });

    if (!user) throw new Error('User not found');

    return user;
  }

  public async removeOne(id: string) {
    const result = await this.UserRepository.remove(id);

    if (!result) throw new Error('User not found');

    return result;
  }
}

export default UserManager;
