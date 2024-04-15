const poolConnect = require("../config/dbConnect");
const searchStats = require("../middlewares/searchStats.js");

async function pageStats(req, res, next) {
    try {

        let { limit = 5, page = 1, sorting = "team_id ASC" } = req.query;

        limit = parseInt(limit);
        page = parseInt(page);

        const offset = (page - 1) * limit;

        const whereClause = await searchStats(req.query);

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
            FROM stats 
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

module.exports = pageStats;