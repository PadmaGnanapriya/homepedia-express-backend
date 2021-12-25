import UserReviewRepository from "../repositories/UserReviewRepository"

async function createUserReview(req: any, res: any, next: any) {
  UserReviewRepository.createUserReview(req.body)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllUserReviews(req: any, res: any, next: any) {
  UserReviewRepository.getAllUserReviews()
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function getAllApprovedReviewsByServiceSupplierId(req: any, res: any, next: any) {
  UserReviewRepository.getAllApprovedReviewsByServiceSupplierId(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function approveUserReview(req: any, res: any, next: any) {
  UserReviewRepository.approveUserReview(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

async function deleteUserReview(req: any, res: any, next: any) {
  UserReviewRepository.deleteUserReview(req.params.id)
    .then((data) => res.json(data))
    .catch((e) => next(e));
}

export default {
  createUserReview,
  getAllUserReviews,
  getAllApprovedReviewsByServiceSupplierId,
  approveUserReview,
  deleteUserReview
}

// TODO: read req.body, query param and pass them properly, pagination
