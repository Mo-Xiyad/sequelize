import { Sequelize } from "sequelize";

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
});

console.log("sequelize handshake created");

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established with database");
  } catch (error) {
    console.log(error);
  }
};

export const connectDB = async () => {
  try {
    console.log("syncronizes all tables in connectDB");
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
};

export default sequelize;
