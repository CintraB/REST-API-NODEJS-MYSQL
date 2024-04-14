const poolConnect = require("../config/dbConnect.js"); // Importa o pool de conexões

class TeamController {

    static ListTeams = async (req, res) => {

        try {

            const [results, fields] = await poolConnect.query("SELECT * FROM teams;");
            //adicionar paginação
            res.status(200).json(results);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    static ListTeamsByID = async (req, res) => {

        try {
            const id = req.params.id;
            const [results, fields] = await poolConnect.query("SELECT * FROM teams WHERE id=?;", id);
            const [results_stats,fields_stats] = await poolConnect.query("SELECT * FROM stats WHERE team_id=?",id);
            const response = { team: results, team_stats: results_stats };
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }

    };


    static ListTeamsByFilter = async (req, res) => {

        try {

        } catch (error) {
            res.status(500).json(error);
        }

    };

    static RegisterTeam = async (req, res) => {

        try {
            const values_team = [req.body.team, req.body.conference, req.body.wins, req.body.losses, req.body.value, req.body.coach];
            const values_stats = [req.body.team_age, req.body.team_height, req.body.team_wingspan];

            //validar entradas
            const token = await validate(values_team, values_stats);


            if (token) {

                //cadastrando time no banco primeiramente para receber o ID AI
                const resultTeamInsert = await poolConnect.query("INSERT INTO teams (teamname,conference,wins,losses,estimated_value,coach) VALUES (?,?,?,?,?,?)", values_team);
                //obtendo ID do time cadastrado
                const teamId = await poolConnect.query("SELECT id FROM teams WHERE teamname=?;", values_team[0]);
                //cadastrando na segunda tabela stats
                await poolConnect.query("INSERT INTO stats (team_id, average_age, average_height, average_wingspan) VALUES (?, ?, ?, ?)", [teamId[0][0].id, ...values_stats]);
                const response = { team_id: teamId[0][0].id, team_values: values_team, stats_values: values_stats };
                res.status(200).json(response);
            } else {
                res.status(400).json({ error: 'Invalid data' });
            }

        } catch (error) {
            res.status(500).json(error);
        }
    };

    static AlterTeam = async (req, res) => {

        try {

        } catch (error) {
            res.status(500).json(error);
        }
    };

    static DeleteTeam = async (req, res) => {

        try {

        } catch (error) {
            res.status(500).json(error);
        }
    };

}

async function validate(data_teams, data_stats) {
    //verificar se os campos estão presentes
    if (data_teams.every(value => value !== undefined && value !== '') &&
        data_stats.every(value => value !== undefined && value !== '')) {
        //verifica se os dados são do tipo correto
        if (
            typeof data_teams[0] === 'string' && // teamname
            typeof data_teams[1] === 'string' && // conference
            !isNaN(data_teams[2]) && // wins
            !isNaN(data_teams[3]) && // losses
            !isNaN(data_teams[4]) && // estimated_value
            typeof data_teams[5] === 'string' && // coach
            !isNaN(data_stats[0]) && // team_age
            !isNaN(data_stats[1]) && // team_height
            !isNaN(data_stats[2]) // team_wingspan
        ) {

            // Verificar se o time já está cadastrado
            const teamName = data_teams[0];
            const [existingTeam] = await poolConnect.query("SELECT id FROM teams WHERE teamname = ?", [teamName]);
            if (existingTeam.length > 0) {
                // Time já cadastrado
                return false;
            }



            return true;
        }
    }
    return false;
}

module.exports = TeamController;