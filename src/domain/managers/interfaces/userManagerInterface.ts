import type User from '../../entities/user';

interface IUserManager {
  list: () => Promise<User[]>;
  getOne: (data: string) => Promise<User>;
  createOne: (data: User) => Promise<User>;
}

export default IUserManager;
