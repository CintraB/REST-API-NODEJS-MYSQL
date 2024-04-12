const poolConnect = require("../config/dbConnect.js");

class StatsController {

   static ListStats = async (req, res) => {

        try {

            const [results,fields] = await poolConnect.query("SELECT * FROM stats");
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    static ListStatsByFilter = async (req,res) => {
        
        try {
            
        } catch (error) {
            res.status(500).json(error);
        }
    };

    static AlterStats = async (req,res) => {
        
        try {
            
        } catch (error) {
            res.status(500).json(error);
        }
    };


}

module.exports = StatsController;