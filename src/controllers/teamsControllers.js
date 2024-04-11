const poolConnect = require("../config/dbConnect.js"); // Importa o pool de conexões

class TeamController{

    static ListTeams = async (req, res) => {

        try {
          res.status(200).json({message: "OLA"});
          console.log("PASSEI AKI XD");         
        } catch (error) {
          res.status(500).json(error);
        }
      };



}


module.exports = TeamController;