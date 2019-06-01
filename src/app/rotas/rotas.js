const db = require('../../config/database')

module.exports = (app)=>{
    
    app.get('/',(req,res) =>{
        res.send(
            `
            <html>
                <h1>Caiu na rota /</h1>
            </html>
            `
        )
    }) 

    app.get('/books',(req,res) =>{

        db.all( 'SELECT * FROM livros' , (erro, results)=>{
            res.marko(
                require('../views/books/listing/listing.marko'),
                {
                    books: results
                } 
            )
        } )

    }) 

}