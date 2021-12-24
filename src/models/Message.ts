import {Document, model, Schema} from "mongoose";

export interface Message extends Document {
  _id: number,
  name: string,
  email: string,
  message: string,
  status: number,
  createdAt: Date
}

export interface MessageModel extends Message {
}

const MessageSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export default model<MessageModel>('message', MessageSchema); // message mean the collection name

