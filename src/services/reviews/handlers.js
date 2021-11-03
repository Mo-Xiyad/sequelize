import models from "../../db/models/index.js";

const { Product, Review } = models;

const createReview = async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.send(newReview);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAllReviews = async (req, res, next) => {
  try {
    const data = await Review.findAll({ include: Product });
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getReviewById = async (req, res, next) => {
  try {
    const data = await Review.findByPk(req.params.id);
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// const updateReview = async (req, res, next) => {
//   try {
//     const currentReview = await Review.findByPk(req.params.id);

//     const updateBody = await Review.findOne({
//       where: { id: req.params.id },
//       returning: true,
//     }).then((review) => {
//       if (!review) {
//         throw new Error(`Review cannot be found with the id provided`);
//       }
//       const { comment, rate } = req.body;
//       review.update({ comment, rate, ...currentReview }).then(res.send(review));
//     });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

// const deleteReview = async (req, res, next) => {
//   try {
//     const review = await Review.destroy({ where: { id: req.params.id } });
//     res.send({ review });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

// const reviewRoutes = {
//   createReview,
//   getAllReviews,
//   getReviewById,
//   updateReview,
//   deleteReview,
// };

// export default reviewRoutes;
