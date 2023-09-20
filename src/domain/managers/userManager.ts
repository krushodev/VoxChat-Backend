import container from '../../container';

import type IUserRepository from '../../data/repositores/interfaces/userRepositoryInterface';
import type { UserProps } from '../../types';

class UserManager {
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

  public async createOne(data: UserProps) {
    const user = await this.UserRepository.saveOne(data);

    if (!user) throw new Error('User not found');

    return user;
  }
}

export default UserManager;
