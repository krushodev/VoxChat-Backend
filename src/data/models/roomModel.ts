import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

const roomsCollection = 'rooms';

const roomSchema = new Schema({
  _id: {
    type: Schema.Types.String,
    default: randomUUID,
    index: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  topics: [
    {
      type: Schema.Types.String
    }
  ],
  messages: [
    {
      id: {
        type: Schema.Types.String,
        default: randomUUID
      },
      text: {
        type: Schema.Types.String
      },
      user: {
        type: Schema.Types.String
      }
    }
  ],
  members: [
    {
      type: Schema.Types.String,
      required: true
    }
  ],
  isPrivate: {
    type: Schema.Types.Boolean,
    default: false
  },
  password: {
    type: Schema.Types.String,
    default: null
  }
});

export default model(roomsCollection, roomSchema);
