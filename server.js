const app = require('./src/config/custom-express')

const port = 3030

app.listen(3030,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
