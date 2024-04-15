const express = require("express");
const pageStats = require("../middlewares/paginationStats.js");
const StatsController = require("../controllers/statsControllers.js");
const statsRoutes = express.Router();

const ROTAS = {
  STATS: "/stats",
  STATS_ID: "/stats/:id",
  STATS_SEARCH: "/stats/search"
 };

 statsRoutes.get(ROTAS.STATS_SEARCH,StatsController.ListStatsByFilter,pageStats);
 statsRoutes.get(ROTAS.STATS,StatsController.ListStats,pageStats);
 statsRoutes.put(ROTAS.STATS_ID,StatsController.AlterStats);


module.exports = statsRoutes;