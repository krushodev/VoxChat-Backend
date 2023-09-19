import RoomModel from '../models/roomModel';
import IRoomRepository from './interfaces/roomRepositoryInterface';

class RoomMongooseRespository implements IRoomRepository {
  public async list() {
    const roomsDocs = await RoomModel.find();

    return roomsDocs.length > 0
      ? roomsDocs.map(roomDoc => ({
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members
        }))
      : null;
  }

  public async findOne(id: string) {
    const roomDoc = await RoomModel.findById(id);

    return roomDoc
      ? {
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members
        }
      : null;
  }

  public async saveOne(data: { name: string; topics: string[]; members: string[] }) {
    const newRoomDoc = new RoomModel(data);
    const roomDoc = await newRoomDoc.save();

    return roomDoc
      ? {
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          members: roomDoc.members
        }
      : null;
  }
}

export default RoomMongooseRespository;
