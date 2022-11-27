import { Router } from "express";

import ExperienciaController from "./controller/ExperienciaController";


const routes = Router();

routes.get("/experiencia", ExperienciaController.find);
routes.post("/experiencia", ExperienciaController.create);
routes.put("/experiencia/:id", ExperienciaController.update);
routes.delete("/experiencia/:id", ExperienciaController.delete);



export default routes;