import {Document, model, Schema} from "mongoose";

export interface ServiceCategory extends Document {
  _id: number,
  name: string,
  status: number,
  createdAt: Date,
  createdBy: number,
  updatedAt: Date,
  updatedBy: number,
}

export interface ServiceCategoryModel extends ServiceCategory {
}

const ServiceCategorySchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
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
  createdBy: {
    type: Number,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  updatedBy: {
    type: Number,
    required: true,
  },
});

export default model<ServiceCategoryModel>('serviceCategory', ServiceCategorySchema); // serviceCategory mean the collection name

