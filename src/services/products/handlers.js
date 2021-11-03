import models from "../../db/models/index.js";

const { Product } = models;

const createproduct = async (req, res, next) => {
  try {
    const data = await Product.create(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const productHandler = {
  createproduct,
};

export default productHandler;
