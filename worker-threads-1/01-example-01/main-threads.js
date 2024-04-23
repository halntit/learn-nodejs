const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  if (req.url === "/") {
    res.end("Home page");

  } else if (req.url === "/slow-page") {
    let j = 0;
    for (let i = 0; i < 6000000000; i++) {
      j++;
    }
    res.end(`Slow page ${j}`);
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
