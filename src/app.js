var app = require('./config/custom-express')();

var PORT = 3000;
var HOST = 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server is on in http://${HOST}:${PORT}`)
})