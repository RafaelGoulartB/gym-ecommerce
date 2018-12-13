class ProdutosDAO {

    constructor(connection) {
        this._connection = connection;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._connection.query("SELECT * FROM produtos", function(err, result){
                err => {
                    if (err) {
                        return reject('Não foi possível atualizar o livro!');
                    }
                }
                return resolve(result);
            });

        });
    }

}


module.exports = function() {
    return ProdutosDAO;
}