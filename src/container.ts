import { createContainer, asClass } from 'awilix';

import RoomMongooseRespository from './data/repositores/roomMongooseRepository';
import UserMongooseRespository from './data/repositores/userMongooseRespository';

const container = createContainer();

container.register('RoomRepository', asClass(RoomMongooseRespository).singleton());
container.register('UserRepository', asClass(UserMongooseRespository).singleton());

export default container;
