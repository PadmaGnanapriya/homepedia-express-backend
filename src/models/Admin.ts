import {Document, model, Schema} from "mongoose";

export interface Admin extends Document {  
  firstName: string,
  lastName: string,
  email: string,
  contactNumber: number,
  address: string,
  status: number,
  createdAt: Date,
  modifiedAt: Date,
}

export interface AdminModel extends Admin {
}

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
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

export default model<AdminModel>('admin', AdminSchema); // admin mean the collection name

