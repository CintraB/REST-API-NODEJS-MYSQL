const mysql = require("mysql2/promise");

const poolConnect = mysql.createPool(process.env.CONNECTION_STRING);


module.exports = poolConnect;