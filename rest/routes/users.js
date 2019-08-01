let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
          id: 0,
          name: 'Gian',
          mail: 'gian@gian.com'
        }]
    });
});

routes.get('/admin', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: []
    });
});

module.exports = routes;
