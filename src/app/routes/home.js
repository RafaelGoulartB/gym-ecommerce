module.exports = function(app) {
    
    app.get('/', (req, res) => {
        var connection = src.app.infra.connectionFactory();;
        // var dao = require("./../infra/produtosDAO");
        
        // var produtosDao = new dao(connection);
        // produtosDAO.lista()
        //             .then(produtos => {
        //                 console.log(produtos)
        //             })
        //             .catch(erro => console.log(erro));

        res.render("index");
    });
}