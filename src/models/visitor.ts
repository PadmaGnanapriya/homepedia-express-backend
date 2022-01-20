 import {Document, model, Schema} from "mongoose";

 export interface Visitor extends Document {
   isNewDevice: boolean,
   firstDate: Date,
   latitude: number,
   longitude:number,
   deviceType:string,
   platform: string,
   appVersion:string,
   createdAt: Date,
 }
 
 export interface VisitorModel extends Visitor {
 }
 
 const VisitorSchema = new Schema({
   isNewDevice: {
     type: Boolean,
     required: true,
   },
   firstDate: {
     type: Date,
     required: true,
   },
   latitude: {
     type: Number,
     required: false,
   },
   longitude: {
     type: Number,
     required: false,
   },
   deviceType: {
     type: String,
     required: false,
   },
   platform: {
    type: String,
    required: false,
  },
  appVersion: {
    type: String,
    required: false,
  },
   createdAt: {
     type: Date,
     required: true,
   },
 });
 
 export default model<VisitorModel>('visitor', VisitorSchema); // userReview mean the collection name
 
 