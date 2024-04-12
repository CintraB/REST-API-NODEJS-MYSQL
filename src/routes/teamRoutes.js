const express = require("express");
const page = require("../middlewares/pagination.js");
const TeamController = require("../controllers/teamsControllers.js");
const teamRoutes = express.Router();

const ROTAS = {
    TIME: "/teams",
    TIME_ID: "/team:id"
   };

teamRoutes.get(ROTAS.TIME,TeamController.ListTeams);


module.exports = teamRoutes;