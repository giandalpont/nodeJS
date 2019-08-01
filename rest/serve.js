const express = require('express');

let app = express( );

app.get('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá, Você esta na <b>HOME</b></h1>');
});

app.get('/users', (req, res)=>{
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

app.listen(3000, '127.0.0.1', ()=>{
  console.log('Servidor rodando!');
})
