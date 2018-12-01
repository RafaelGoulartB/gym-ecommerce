var express = require("express");
var app = express();
var consing = require('consign');

consing()
    .include("src/app/routes")
    .into(app);

app.use(express.static('src/app/public'));
app.set('view engine', 'ejs');
app.set('views', 'src/app/views');


module.exports = function() {
    return app;
}