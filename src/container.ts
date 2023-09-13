import { createContainer, asClass } from "awilix";

import RoomRespository from "./data/repositores/roomRepository";

const container = createContainer();

container.register("RoomRepository", asClass(RoomRespository).singleton());

export default container;
