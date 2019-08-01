const express = require('express');
let routerIndex = require('./routes/index');
let routerUsers = require('./routes/users');

let app = express( );

app.use(routerIndex);
app.use('/users', routerUsers);

app.listen(3000, '127.0.0.1', ()=>{
  console.log('Servidor rodando!');
})
