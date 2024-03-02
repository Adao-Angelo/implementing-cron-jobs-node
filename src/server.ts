import express from "express";
import { start } from "./cron-node";
const app = express();
app.use(express.json());

start();
app.listen(9000, () => {
  console.log("server running at port: ", 9000);
});
