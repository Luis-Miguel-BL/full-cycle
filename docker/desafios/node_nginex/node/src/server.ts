import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import connection, { setupDB } from "./data";
import { Controller } from "./controller";

const controller = new Controller()

const app = express();

app.get("/", controller.execute);

setupDB(connection)

app.listen(5001, () => console.log("▶️ Server started on port 5001 !"));
