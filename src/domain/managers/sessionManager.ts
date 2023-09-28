import jwt from 'jsonwebtoken';

import container from '../../container';

import { generateAccessToken, generateHash, generateRefreshToken, validateHash } from '../../shared';

import type IUserRepository from '../../data/repositores/interfaces/userRepositoryInterface';
import type ISessionManager from './interfaces/sessionManagerInterface';
import type { ResponseJWT, UserLoginProps } from '../../types';

import loginSchema from '../validations/session/loginValidation';
import { UserBodyPayload } from '../../shared/types/user';
import userBodySchema from '../validations/user/userBodyValidation';

class SessionManager implements ISessionManager {
  private userRepository: IUserRepository = container.resolve('UserRepository');

  public async login(data: UserLoginProps) {
    const { email, password } = await loginSchema.parseAsync(data);

    const user = await this.userRepository.findOneByEmail(email);

    if (!user) throw new Error('Incorrect user or password');

    const hashedPasswordValidation = await validateHash(data.password, password);

    if (!hashedPasswordValidation) throw new Error('Incorrect user or password');

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return { accessToken, refreshToken };
  }

  public async signup(data: UserBodyPayload) {
    const { password, email } = await userBodySchema.parseAsync(data);

    const userExists = await this.userRepository.findOneByEmail(email);

    if (userExists) throw new Error('User already exists');

    const hashedPassword = await generateHash(password);

    await this.userRepository.saveOne({ ...data, password: hashedPassword });

    return true;
  }

  public async resolveRefreshToken(data: string) {
    let userId = '';

    jwt.verify(data!, process.env.JWT_REFRESH_KEY!, (err, credentials) => {
      if (err) throw new Error('Token has expired');

      userId = (credentials as ResponseJWT).user.id;
    });

    const user = await this.userRepository.findOne(userId);

    if (!user) throw new Error('Incorrect user');

    const newAccessToken = generateAccessToken(user);

    return newAccessToken;
  }
}

export default SessionManager;
