import express from "express";
// import models from "../../db/models/index.js";
import productHandler from "./handlers.js";

const router = express.Router();

router.route("/").post(productHandler.createproduct);

export default router;
