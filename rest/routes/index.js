module.exports = app=>{
    app.get('/', (req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Ol�, Voc� esta na <b>HOME</b></h1>');
    });
};
