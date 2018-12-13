var mysql = require("mysql");

function createDBConnection(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "loja_suplementos"
    });
}

module.exports = function() {
    return createDBConnection;
};


//INSERT INTO produtos (nome, preco, img) VALUES ('Gold Standard 100% Whey', 135.36 , 'whey-gold-standard')