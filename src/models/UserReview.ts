/** 
 * Add rating under service supplier profile. 
 * Default status is 0. It does not appear. 
 * Admin should approve it. (status 0 -> 1)
 * Admin can delete also.
 * */

import {Document, model, Schema} from "mongoose";

export interface UserReview extends Document {
  serviceSupplierId: number,
  fullName: string,
  reviewerEmail: string,
  rate: number,
  commit: string,
  status: number,
  createdAt: Date,
  updatedAt: Date,
  updatedBy: number,
}

export interface UserReviewModel extends UserReview {
}

const UserReviewSchema = new Schema({
  serviceSupplierId: {
    type: Number,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  reviewerEmail: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  commit: {
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
  updatedBy: {
    type: Number,
    required: false,
  },
});

export default model<UserReviewModel>('userReview', UserReviewSchema); // userReview mean the collection name

