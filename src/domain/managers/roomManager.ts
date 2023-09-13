import container from "../../container";
import IRoomManager from "./interfaces/roomManagerInterface";

class RoomManager implements IRoomManager {
    private RoomRepostory = container.resolve("RoomRepository");

    public async list() {
        return await this.RoomRepostory.list();
    }

    public async getOne() {

    }

    public async createOne() {

    }
}

export default RoomManager;
