const app = require('./src/config/custom-express')

const port = 3030
const localhost = ''

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})

app.get('/',(req,res) =>{
    res.send(
        `
        <html>
            <h1>Caiu no /</h1>
        </html>
        `
    )
})

// const http = require('http')

// const serv = http.createServer((req,res)=>{

//     var html = ''
    
//     if(req.url == '/'){
    //         html = `
    //         <html>
    //             <h1>Caiu no /</h1>
    //         </html>
//         `
//     }else if(req.url == '/inicial'){
//         html =  `
//         <html>
//             <h1>Caio no /INICIAL</h1>
//         </html>
//         `
//     }else{
//         html = `
//         <html>
//             <h1>Caio no else</h1>
//         </html>
//         `
//     }

//     res.end( html )

// })

// serv.listen(3030)