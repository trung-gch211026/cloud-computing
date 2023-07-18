const http = require('http')
const fs = require('fs')
const host = "localhost"
const port = 3000
const server = http.createServer((req, res)=>{
    fs.readFile("demo.html", (err, data)=>{
        if(err){
            console.error(err)
        }else{
            res.write(data)
            res.end();
        }
    })
})
server.listen(port, ()=>{
    console.log("Server is running at http://"+host+":"+port)
})