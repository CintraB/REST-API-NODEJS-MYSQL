const poolConnect = require("../config/dbConnect.js");
const searchStats = require("../middlewares/searchStats.js");

class StatsController {

    static ListStats = async (req, res, next) => {

        try {

            const [results, fields] = await poolConnect.query("SELECT * FROM stats");
            req.results = results;
            next();
        } catch (error) {
            res.status(500).json(error);
        }
    };

    static ListStatsByFilter = async (req, res, next) => {

        try {
            const params = req.query;

            // Construir a consulta SQL
            const whereClause = await searchStats(params);

            // Executar a consulta SQL no banco de dados
            const [results, fields] = await poolConnect.query(whereClause);

            req.result = results;
            next();
        } catch (error) {
            res.status(500).json(error);
        }
    };

    static AlterStats = async (req, res) => {

        try {
            const team_id = req.params.id;
            const values_stats = [req.body.team_age, req.body.team_height, req.body.team_wingspan];
            // Verifica se algum valor em values_stats é nulo
            const isAnyStatsValueNull = values_stats.some(value => value === null || value === undefined || value === '');
            const isAnyStatsValueNaN = values_stats.some(value => isNaN(value));

            if (isAnyStatsValueNull || isAnyStatsValueNaN) {
                res.status(400).json({ message: 'There are missing or incorrect fields' });
            } else {
                // Atualizar os dados na tabela stats
                await poolConnect.query('UPDATE stats SET average_age = ?, average_height = ?, average_wingspan = ? WHERE team_id = ?', [...values_stats, team_id]);
                res.status(200).json({ message: 'Data updated successfully' });
            }

        } catch (error) {
            res.status(500).json(error);
        }
    };


}

module.exports = StatsController;