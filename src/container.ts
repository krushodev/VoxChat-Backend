import { createContainer, asClass } from 'awilix';

import RoomMongooseRespository from './data/repositores/roomMongooseRepository';

const container = createContainer();

container.register('RoomRepository', asClass(RoomMongooseRespository).singleton());

export default container;
