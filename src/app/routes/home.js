module.exports = function(app) {
    
    app.get('/', (req, res) => {

        let conn = app.src.app.infra.connectionFactory();
        let produtosDAO = new app.src.app.infra.produtosDAO(conn);

        produtosDAO.lista().then(result =>
            res.render("index", {produtos : result})
        )
        .catch(err => console.log("Erro ao carregar os produtos", err))


    });
}