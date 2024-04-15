const poolConnect = require("../config/dbConnect.js"); // Importa o pool de conexões

async function processSearch(params) {

  const { teamname, conference, coach } = params;

  let query = "SELECT * FROM teams WHERE 1";

  // Adiciona a condição de busca pelo nome do time se estiver presente nos parâmetros
  if (teamname) {
    query += ` AND teamname LIKE '%${teamname}%'`;
  }

  // Adiciona a condição de busca pela conferência se estiver presente nos parâmetros
  if (conference) {
    query += ` AND conference = '${conference}'`;
  }

  // Adiciona a condição de busca pelo nome do técnico se estiver presente nos parâmetros
  if (coach) {
    query += ` AND coach LIKE '%${coach}%'`;
  }

  return query;
}

module.exports = processSearch;