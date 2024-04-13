const express = require("express");
const page = require("../middlewares/pagination.js");
const TeamController = require("../controllers/teamsControllers.js");
const teamRoutes = express.Router();

const ROTAS = {
    TIME: "/teams",
    TIME_ID: "/teams/:id"
   };

teamRoutes.get(ROTAS.TIME,TeamController.ListTeams);
teamRoutes.get(ROTAS.TIME_ID,TeamController.ListTeamsByID);
teamRoutes.post(ROTAS.TIME,TeamController.RegisterTeam);
//routes.get("/livros/busca", LivroController.listarLivroPorFiltro, paginar);

//routes.post("/livros",LivroController.cadastrarLivro);
//routes.put("/livros/:id",LivroController.atualizarLivro);
//routes.delete("/livros/:id",LivroController.excluirLivro);

module.exports = teamRoutes;