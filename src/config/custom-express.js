var express = require("express");
var app = express();
var consing = require('consign');
var load = require('express-load');

// consing()
//     .include("src/app/routes")
//     .into(app);
load('routes', {cwd: 'src/app'})
        .then('infra')
        .into(app);

app.use(express.static('src/app/public'));
app.set('view engine', 'ejs');
app.set('views', 'src/app/views');


module.exports = function() {
    return app;
}