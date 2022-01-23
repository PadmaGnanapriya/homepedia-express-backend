import {Document, model, Schema} from "mongoose";

export interface City extends Document {
  name: string,
  createdAt: Date,
  modifiedAt: Date,
}

export interface CityModel extends City {
}

const CitySchema = new Schema({
  name: {
    type: String,
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

export default model<CityModel>('city', CitySchema); // city mean the collection name

