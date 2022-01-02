import {Document, model, Schema} from "mongoose";

export interface FAQ extends Document {
  indexNo: number,
  question: string,
  answer: string,
  status: number,
  createdAt: Date,
  modifiedAt: Date,
}

export interface FAQModel extends FAQ {
}

const FAQSchema = new Schema({
  indexNo: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
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
  modifiedAt: {
    type: Date,
    required: true,
  },

});

export default model<FAQModel>('FAQ', FAQSchema); // FAQ mean the collection name

