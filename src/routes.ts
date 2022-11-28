import { Router } from "express";
import RegistroPessoalController from "./controller/RegistroPessoalController";
import FormacaoAcademicaController from "./controller/FormacaoAcademicaController";
import ExperienciaController from "./controller/ExperienciaController";
import HobbieController from "./controller/HobbieController";
import AtividadesExtraController from "./controller/AtividadesExtraController";

const routes = Router();

routes.get("/registropessoal", RegistroPessoalController.find);
routes.post("/registropessoal", RegistroPessoalController.create);
routes.put("/registropessoal/:id", RegistroPessoalController.update);
routes.delete("/registropessoal/:id", RegistroPessoalController.delete);

routes.get("/formacaoacademica", FormacaoAcademicaController.find);
routes.post("/formacaoacademica", FormacaoAcademicaController.create);
routes.put("/formacaoacademica/:id", FormacaoAcademicaController.update);
routes.delete("/formacaoacademica/:id", FormacaoAcademicaController.delete);

routes.get("/experiencia", ExperienciaController.find);
routes.post("/experiencia", ExperienciaController.create);
routes.put("/experiencia/:id", ExperienciaController.update);
routes.delete("/experiencia/:id", ExperienciaController.delete);

routes.get("/hobbie", HobbieController.find);
routes.post("/hobbie", HobbieController.create);
routes.put("/hobbie/:id", HobbieController.update);
routes.delete("/hobbie/:id", HobbieController.delete);

routes.get("/atividadesextra", AtividadesExtraController.find);
routes.post("/atividadesextra", AtividadesExtraController.create);
routes.put("/atividadesextra/:id", AtividadesExtraController.update);
routes.delete("/atividadesextra/:id", AtividadesExtraController.delete);


export default routes;