const express = require("express");
const page = require("../middlewares/pagination.js");
const StatsController = require("../controllers/statsControllers.js");
const statsRoutes = express.Router();

const ROTAS = {
  STATS: "/stats",
  STATS_ID: "/stats:id"
 };

 statsRoutes.get(ROTAS.STATS,StatsController.ListStats);


module.exports = statsRoutes;