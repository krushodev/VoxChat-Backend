import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';

const roomsCollection = 'rooms';

const roomSchema = new Schema({
  _id: {
    type: Schema.Types.String,
    default: randomUUID
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
  messages: {
    type: [
      {
        _id: {
          type: Schema.Types.String,
          default: randomUUID
        },
        text: {
          type: Schema.Types.String,
          required: true
        },
        user: {
          type: {
            _id: {
              type: Schema.Types.String,
              default: randomUUID
            },
            name: {
              type: Schema.Types.String,
              required: true
            },
            image: {
              type: Schema.Types.String,
              required: true
            }
          },
          required: true
        },
        date: {
          type: Schema.Types.Date,
          required: true
        }
      }
    ]
  },
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
