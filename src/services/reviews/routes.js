import express from "express";
import reviewRoutes from "./handlers.js";

const router = express.Router();

router
  .route("/")
  .get(reviewRoutes.getAllReviews)
  .post(reviewRoutes.createReview);

router
  .route("/:id")
  .get(reviewRoutes.getReviewById)
  .put(reviewRoutes.updateReview)
  .delete(reviewRoutes.deleteReview);

export default router;
