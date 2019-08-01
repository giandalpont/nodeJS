const express = require('express');
const consign  = require('consign');
const parser = require('body-parser')

let app = express();

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

consign().include('routes').into(app);

app.listen(3000, '127.0.0.1', ()=>{
  console.log('Servidor rodando!');
})
