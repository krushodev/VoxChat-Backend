import { Schema, model } from "mongoose";
import { randomUUID } from "crypto";

const roomsCollection = "rooms";

const roomSchema = new Schema({
    _id: {
        type: Schema.Types.String,
        default: randomUUID,
        index: true
    },
    name: {
        type: Schema.Types.String,
        required: true,
    },
    tags: [{
        type: Schema.Types.String,
    }],
    participants: [{
        type: Schema.Types.String,
        required: true
    }]

});

export default model(roomsCollection, roomSchema);
