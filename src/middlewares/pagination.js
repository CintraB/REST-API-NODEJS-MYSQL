//import requisicaoIncorreta from "../erros/requisicaoIncorreta.js";

const poolConnect = require("../config/dbConnect");
const search = require("../middlewares/search.js");

async function page(req, res, next) {
  try {

    let { limit = 5, page = 1, sorting = "id ASC" } = req.query;

    limit = parseInt(limit);
    page = parseInt(page);

    const offset = (page - 1) * limit;

    const whereClause = await search(req.query);

    if (whereClause) {
      const query = `
      ${whereClause} 
      ORDER BY ${sorting}
      LIMIT ?, ?
    `;
      const [rows, fields] = await poolConnect.query(query, [offset, limit]);
      res.status(200).json(rows);
    } else {
      const query = `
      SELECT * 
      FROM teams 
      ${whereClause} 
      ORDER BY ${sorting}
      LIMIT ?, ?
    `;
      const [rows, fields] = await poolConnect.query(query, [offset, limit]);
      res.status(200).json(rows);
    }

  } catch (error) {
    //next(erro);
    res.status(500).json(error);
  }
}

module.exports = page;