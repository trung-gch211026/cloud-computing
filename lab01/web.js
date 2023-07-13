//1. Khai báo thư viện http
const http = require('http')
//2. Khai báo host
const host = 'localhost'
//3. Khai báo port của server
const port = 5000       //3000: default port of NodeJS server
//4. Khai báo server
const server = http.createServer((request, response) => {
    response.write("<h1 style='color: red; background-color: pink'>Hello world</h1>");
    response.write("<h3 style='font-style: italic; text-decoration: underline'>We are from Greenwich Vietnam</h3>");
    response.write("<h2 style='font-style: italic; text-decoration: underline'>Thanh ba ga</h2>");
    response.write('<p>This is a paragraph</p>')
    response.write('<p>This is another paragraph</p>')
    response.write("<iframe width=\"1300\" height=\"700\" src=\"https://www.youtube.com/embed/uZQJPclKn2E\"></iframe>");
    response.end();
  });
//5. Cho server listen port để chạy web
server.listen(port, () => {
    console.log("Server is running at http://"+host+":"+port)
})