import {Document, model, Schema} from "mongoose";

export interface ServiceCategory extends Document {
  name: string,
  icon: string,
  status: number,
  createdAt: Date,
  updatedAt: Date,
}

export interface ServiceCategoryModel extends ServiceCategory {
}

const ServiceCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
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
  updatedAt: {
    type: Date,
    required: true,
  },
});

export default model<ServiceCategoryModel>('serviceCategory', ServiceCategorySchema); // serviceCategory mean the collection name

