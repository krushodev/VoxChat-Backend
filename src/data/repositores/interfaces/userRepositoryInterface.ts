import type User from '../../../domain/entities/user';

interface IUserRepository {
  list: () => Promise<User[] | null>;
  findOne: (id: string) => Promise<User | null>;
  findOneByEmail: (data: string) => Promise<User | null>;
  saveOne: (data: User) => Promise<User | null>;
}

export default IUserRepository;
