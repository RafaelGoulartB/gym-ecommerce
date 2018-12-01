module.exports = function(app){

    app.get('/produto/:id', (req, res) => {
        res.render('produto');
    })

}