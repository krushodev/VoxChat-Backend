import jwt from 'jsonwebtoken';

import container from '../../container';

import { generateAccessToken, generateHash, generateRefreshToken, validateHash } from '../../shared';

import loginSchema from '../validations/session/loginValidation';
import userBodySchema from '../validations/user/userBodyValidation';
import updateUserImageSchema from '../validations/session/updateUserImageValidation';

import type IUserRepository from '../../data/repositores/interfaces/userRepositoryInterface';
import type ISessionManager from './interfaces/sessionManagerInterface';
import type { ResponseJWT, UserLoginProps } from '../../types';

class SessionManager implements ISessionManager {
  private userRepository: IUserRepository = container.resolve('UserRepository');

  public async login(data: UserLoginProps) {
    const { email, password } = await loginSchema.parseAsync(data);

    const user = await this.userRepository.findOneByEmail(email);

    if (!user) throw new Error('Incorrect user or password');

    const hashedPasswordValidation = await validateHash(password, user.password);

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

    await this.userRepository.saveOne({ ...data, password: hashedPassword } as UserBody);

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

  public async updateImage(data: { id: string; image: string }) {
    const { id, image } = await updateUserImageSchema.parseAsync(data);

    const user = await this.userRepository.findOne(id);

    if (!user) throw new Error('User not found');

    const result = await this.userRepository.update({ id, update: { image } });

    if (!result) throw new Error('Error to update user image');

    return true;
  }
}

export default SessionManager;
