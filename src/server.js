import express from "express";
import listEndpoints from "express-list-endpoints";
import productsRoute from "./services/products/routes.js";
import reviewsRoute from "./services/reviews/routes.js";
import { testConnection, connectDB } from "./db/index.js";

const server = express();

const { PORT } = process.env;

server.use(express.json());

server.use("/products", productsRoute);
server.use("/reviews", reviewsRoute);

console.table(listEndpoints(server));
server.listen(PORT, async () => {
  console.log(`✅ Server is running on port ${PORT}`);
  await testConnection();
  await connectDB();
});

server.on("error", (error) => {
  console.log(`Server Error: -----> ${error}`);
});
