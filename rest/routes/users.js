module.exports = app=>{
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

  app.get('/users/admin', (req, res)=>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({
          users: []
      });
  });
};
