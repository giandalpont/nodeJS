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

}