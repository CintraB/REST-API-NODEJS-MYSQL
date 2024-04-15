const express = require("express");
const page = require("../middlewares/pagination.js");
const TeamController = require("../controllers/teamsControllers.js");
const teamRoutes = express.Router();

const ROTAS = {
    TIME: "/teams",
    TIME_ID: "/teams/:id",
    TIME_SEARCH: "/teams/search"
   };

teamRoutes.get(ROTAS.TIME_SEARCH, TeamController.ListTeamsByFilter,page);
teamRoutes.get(ROTAS.TIME,page,TeamController.ListTeams);
teamRoutes.get(ROTAS.TIME_ID,TeamController.ListTeamsByID);
teamRoutes.post(ROTAS.TIME,TeamController.RegisterTeam);
teamRoutes.put(ROTAS.TIME_ID,TeamController.AlterTeam);
teamRoutes.delete(ROTAS.TIME_ID,TeamController.DeleteTeam);


module.exports = teamRoutes;