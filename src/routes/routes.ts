import { Router } from "express";
import * as playersController from "../controllers/players-controller";

export const routes= Router()

routes.get("/players",playersController.getPlayer);
routes.get("/players/:id",playersController.getFindByIdPlayer);

routes.post("/players", playersController.postPlayer);

