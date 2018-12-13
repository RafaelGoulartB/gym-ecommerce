module.exports = function(app){

    app.get('/produto/:id', (req, res) => {

        let id = req.params.id;

        let conn = app.src.app.infra.connectionFactory();
        let produtosDAO = new app.src.app.infra.produtosDAO(conn);

        produtosDAO.buscaId(id)
                .then( results => 
                    res.render('produto', {produto: results})
                )
                .catch( err => console.log("Erro ao carregar o produto", err) )        
    })

}