const poolConnect = require("../config/dbConnect.js"); // Importa o pool de conexões

async function processSearchStats(params) {

    const { id_team, age, height, wingspan } = params;

    let query = "SELECT * FROM stats WHERE 1";

    // Adiciona a condição de busca pelo id do time se estiver presente nos parâmetros
    if (id_team) {
        query += ` AND team_id LIKE '%${id_team}%'`;
    }

    // Adiciona a condição de busca pela idade se estiver presente nos parâmetros
    if (age) {
        query += ` AND average_age LIKE '%${age}%'`;
    }

    // Adiciona a condição de busca pela altura se estiver presente nos parâmetros
    if (height) {
        query += ` AND average_height LIKE '%${height}%'`;
    }

    // Adiciona a condição de busca pela envergadura se estiver presente nos parâmetros
    if (wingspan) {
        query += ` AND average_wingspan LIKE '%${wingspan}%'`;
    }

    return query;
}

module.exports = processSearchStats;