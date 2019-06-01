module.exports = (app)=>{
    
    app.get('/',(req,res) =>{
        res.send(
            `
            <html>
                <h1>Caiu no /</h1>
            </html>
            `
        )
    }) 

}