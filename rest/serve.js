const http = require('http');

let serve = http.createServer((req, res)=>{
  console.log('URL:', req.url);
  console.log('METHOD:', req.method);

  switch (req.url) {
    case '/':
        res.statusCode = 200;
        res.setEncoding('utf8');
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Olá, Você esta na <b>HOME</b></h1>');
        break;
    case '/user':
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            users: [{
                id: 1,
                name: 'gian',
                mail: 'gian@gian.com'
            }]
        }));
        break
  }
});

serve.listen(3000, '127.0.0.1', ()=>{
  console.log('Servidor rodando!');
})
