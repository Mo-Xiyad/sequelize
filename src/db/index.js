import { sequelize } from "sequelize";

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } = process.env;

const sequelize = new sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
});
console.log("sequelize handshake created");
