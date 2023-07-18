const http = require("http");
const port = process.env.PORT || 3001
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    fs.readFile("home.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200);
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/hanoi") {
    fs.readFile("hanoi.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200);
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/hcm") {
    fs.readFile("hcm.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200);
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/cantho") {
    fs.readFile("cantho.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200);
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write("<h1>404 - Not found</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log("Server is listening at http://localhost:" + port);
});
