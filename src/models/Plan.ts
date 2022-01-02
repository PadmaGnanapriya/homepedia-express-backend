import {Document, model, Schema} from "mongoose";

export interface Plan extends Document {
  name: string,
  amount: string,
  status: number,
  createdAt: Date,
  modifiedAt: Date,
}

export interface PlanModel extends Plan {
}

const PlanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
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

export default model<PlanModel>('plan', PlanSchema); // plan mean the collection name

