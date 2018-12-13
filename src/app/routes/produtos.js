module.exports = function(app) {

    app.get('/produtos/:categoria', (req, res) => {
        let categoria = req.params.categoria;
        
        let conn = app.src.app.infra.connectionFactory();
        let produtosDAO = new app.src.app.infra.produtosDAO(conn);

        produtosDAO.filtrar(categoria).then(results => 
            res.render( "produtos", {produtos: results} )
        )
        .catch(err => console.log("Erro ao filtrar categoria ", err))
        
    });

}