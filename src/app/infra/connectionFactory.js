var mysql = require("mysql");

function createDBConnection(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password "",
        database: "loja_suplementos"
    });
}

module.exports = () => createDBConnection;