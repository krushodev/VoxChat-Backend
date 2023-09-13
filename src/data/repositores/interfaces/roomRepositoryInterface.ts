import Room from "../../../domain/entities/room";

interface IRoomRepository {
    list: () => Room[];
    findOne: () => Room;
    saveOne: () => Room;
}

export default IRoomRepository;