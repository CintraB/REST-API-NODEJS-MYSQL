const poolConnect = require("../config/dbConnect.js"); // Importa o pool de conexões

class TeamController {

    static ListTeams = async (req, res) => {

        try {

            const [results,fields] = await poolConnect.query("SELECT * FROM teams");
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    static ListTeamsByFilter = async (req,res) => {

        try {
            
        } catch (error) {
            res.status(500).json(error);
        }

    };

    static RegisterTeam = async (req,res) => {
        
        try {
            
        } catch (error) {
            res.status(500).json(error);
        }
    };

    static AlterTeam = async (req,res) => {
        
        try {
            
        } catch (error) {
            res.status(500).json(error);
        }
    };

    static DeleteTeam = async (req,res) => {
        
        try {
            
        } catch (error) {
            res.status(500).json(error);
        }
    };
}

module.exports = TeamController;