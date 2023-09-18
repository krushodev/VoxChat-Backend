import RoomModel from "../models/roomModel";
import IRoomRepository from "./interfaces/roomRepositoryInterface";

class RoomMongooseRespository implements IRoomRepository {
  public async list() {
    const roomsDocs = await RoomModel.find();

    return roomsDocs.length > 0
      ? roomsDocs.map((roomDoc) => ({
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          participants: roomDoc.participants,
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
          participants: roomDoc.participants,
        }
      : null;
  }

  public async saveOne(data: { name: string; tags: string[]; participants: string[] }) {
    const newRoomDoc = new RoomModel(data);
    const roomDoc = await newRoomDoc.save();

    return roomDoc
      ? {
          id: roomDoc._id,
          name: roomDoc.name,
          topics: roomDoc.topics,
          participants: roomDoc.participants,
        }
      : null;
  }
}

export default RoomMongooseRespository;
