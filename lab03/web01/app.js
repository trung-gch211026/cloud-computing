const http = require('http')
const port = 3000;
const fs = require('fs')
const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        fs.readFile("index.html", (err, data)=>{
            if(err){
                console.error(err)
            }  
            else{
                res.write(data)
                res.end()
            }
        })
    }else if(req.url == '/login'){
        fs.readFile("login.html", (err, data)=>{
            if(err){
                console.error(err)
            }  
            else{
                res.write(data)
                res.end()
            }
        })
    }
    else{
        res.write("<h1>404 - Not Found</h1>")
        res.end()
    } 
})
server.listen(port, ()=>{
    console.log("Server is listening at http://localhost:"+port)
})