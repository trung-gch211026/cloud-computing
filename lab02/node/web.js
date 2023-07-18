const http = require ('http')
const host = 'localhost'
const port = 3000
const server = http.createServer((req, res)=> {
    res.write("<h1>Hello</h1>")
    res.write("<h2>Hello</h2>")
    res.write("<h3>Hello</h3>")
    
})
