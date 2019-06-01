const BookDao = require('../infra/book_dao')

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

        const bookDao = new BookDao(db)

        bookDao.list(function (err, results) {
            res.marko(
                require('../views/books/listing/listing.marko'),
                {
                    books: results
                } 
            )
        } )

    }) 

}