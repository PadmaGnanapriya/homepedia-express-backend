import { Router } from 'express';
import UserReviewController from "../controllers/UserReviewController";

const userReviewRoutes = Router();

userReviewRoutes.post('/',UserReviewController.createUserReview);
userReviewRoutes.get('/',UserReviewController.getAllUserReviews);
userReviewRoutes.get('/:id',UserReviewController.getAllApprovedReviewsByServiceSupplierId);
userReviewRoutes.patch('/:id',UserReviewController.approveUserReview);
userReviewRoutes.delete('/:id',UserReviewController.deleteUserReview);

export default userReviewRoutes;

// todo: add auth middleware
// userReviewRoutes.post('/', authorization([ADMINISTRATOR]),UserReviewController.createUserReview);
