import type User from '../../../domain/entities/user';
import type { UserProps } from '../../../types';

interface IUserRepository {
  list: () => Promise<User[] | null>;
  findOne: (id: string) => Promise<User | null>;
  findOneByEmail: (data: string) => Promise<User | null>;
  saveOne: (data: UserProps) => Promise<User | null>;
}

export default IUserRepository;
