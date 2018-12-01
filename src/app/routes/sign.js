module.exports = function(app){


    app.get('/sign-up', (req, res) => {
        res.render('sign-up');
    });
    
    app.get('/sign-in', (req, res) => {
        res.render('sign-in');
    });

}