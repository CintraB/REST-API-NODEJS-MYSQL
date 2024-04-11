const express = require("express");
const page = require("../middlewares/pagination.js");
const TeamController = require("../controllers/teamsControllers.js");
const teamRoutes = express.Router();

const ROTAS = {
    TIME: "/teams",
    TIME_ID: "/team"
   };

teamRoutes.get("/:id", (req, res) => {
    // Lógica para lidar com a rota "/teams/:id"
  });

teamRoutes.get(ROTAS.TIME,TeamController.ListTeams);
//teamRoutes.get("/teams/search", LivroController.listarLivroPorFiltro, paginar);
//teamRoutes.get(`${ROTAS.TIME}/:id`,LivroController.listarLivroPorId);
//teamRoutes.post("/teams",LivroController.cadastrarLivro);
//teamRoutes.put("/teams/:id",LivroController.atualizarLivro);
//teamRoutes.delete("/teams/:id",LivroController.excluirLivro);

module.exports = teamRoutes;