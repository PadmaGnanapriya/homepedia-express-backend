import { Router } from 'express';
import UserReviewController from "../controllers/UserReviewController";
import authorization, {PERMISSION_TYPES} from "../middleware/authorization";

const userReviewRoutes = Router();

userReviewRoutes.post('/', authorization([PERMISSION_TYPES.ANY]), UserReviewController.createUserReview);
userReviewRoutes.get('/', authorization([PERMISSION_TYPES.ADMINISTRATOR]), UserReviewController.getAllUserReviews);
userReviewRoutes.get('/:id', authorization([PERMISSION_TYPES.ANY]), UserReviewController.getAllApprovedReviewsByServiceSupplierId);
userReviewRoutes.patch('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), UserReviewController.approveUserReview);
userReviewRoutes.delete('/:id', authorization([PERMISSION_TYPES.ADMINISTRATOR]), UserReviewController.deleteUserReview);

export default userReviewRoutes;

// todo: add auth middleware
// userReviewRoutes.post('/', authorization([ADMINISTRATOR]),UserReviewController.createUserReview);
