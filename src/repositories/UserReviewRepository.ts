import UserReviewModel, {UserReview} from "../models/UserReview";

/**
 * create new UserReview in mongo db
 * @param newUserReview
 */

const createUserReview = async (newUserReview: UserReview) => {
  console.log(newUserReview);
  return await UserReviewModel.create(
    {
      _id: newUserReview._id,
      serviceSupplierId: newUserReview.serviceSupplierId,
      fullName: newUserReview.fullName,
      reviewerEmail: newUserReview.reviewerEmail,
      rate: newUserReview.rate,
      commit: newUserReview.commit,
      status: 0,
      createdAt: new Date(),
      updatedAt:new Date(),
      updatedBy: null,
    }
  );
};

/**
 * Sent all UserReviews
 * For admin table
 */
const getAllUserReviews= async () => {
  return UserReviewModel.find({status:  { $ne: 3 }});
}

/**
 * Sent all UserReviews by given Service Supplier Id
 */
const getAllApprovedReviewsByServiceSupplierId = async (id: number) => {
  return UserReviewModel.find({status: 1, serviceSupplierId: id},
    'fullName reviewerEmail rate commit createdAt');
}

/**
 * Approve user review by admin
 * @param id
 */
const approveUserReview = async (id: number) => {
  return UserReviewModel.findOneAndUpdate({_id: id}, {$set: {status: 1, updatedAt: new Date()}})
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deleteUserReview = async (id: number) => {
  return UserReviewModel.findOneAndUpdate({_id: id}, {$set: {status: 3, updatedAt: new Date()}})
}

export default {
  createUserReview,
  getAllUserReviews,
  getAllApprovedReviewsByServiceSupplierId,
  approveUserReview,
  deleteUserReview,
}
