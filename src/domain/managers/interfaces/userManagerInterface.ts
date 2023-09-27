import type User from '../../entities/user';

interface IUserManager {
  list: () => Promise<User[]>;
  getOne: (data: string) => Promise<User>;
  createOne: (data: UserBodyPayload) => Promise<User>;
  updateOne: (data: UserBodyUpdatePayload) => Promise<User>;
  removeOne: (id: string) => Promise<Boolean>;
}

export default IUserManager;
