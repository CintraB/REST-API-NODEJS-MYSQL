const express = require("express");
const statsRoutes = express.Router();

statsRoutes.get("/", (req, res) => {
    // Lógica para lidar com a rota "/stats"
  });
  
statsRoutes.get("/:id", (req, res) => {
    // Lógica para lidar com a rota "/stats/:id"
  });



module.exports = statsRoutes;