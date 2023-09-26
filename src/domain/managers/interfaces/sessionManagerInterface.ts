import type User from '../../entities/user';
import type { UserLoginProps } from '../../../types';

interface ISessionManager {
  login: (data: UserLoginProps) => Promise<{ accessToken: string; refreshToken: string }>;
  signup: (data: User) => Promise<boolean>;
  resolveRefreshToken: (data: string) => Promise<string>;
}

export default ISessionManager;
