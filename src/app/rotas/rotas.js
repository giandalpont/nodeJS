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
        res.marko(
            require('../views/books/listing/listing.marko')     
        )
    }) 

}