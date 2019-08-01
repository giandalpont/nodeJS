let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Ol�, Voc� esta na <b>HOME</b></h1>');
});

module.exports = routes;
