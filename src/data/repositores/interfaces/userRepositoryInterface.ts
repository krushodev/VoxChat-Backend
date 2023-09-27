import type User from '../../../domain/entities/user';

interface IUserRepository {
  list: () => Promise<User[] | null>;
  findOne: (id: string) => Promise<User | null>;
  findOneByEmail: (data: string) => Promise<User | null>;
  saveOne: (data: User) => Promise<User | null>;
  update: (data: User) => Promise<User | null>;
  remove: (id: string) => Promise<Boolean | null>;
}

export default IUserRepository;
