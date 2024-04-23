const http = require('http');
const { Worker } = require('node:worker_threads');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  if (req.url === "/") {
    res.end("Home page");

  } else if (req.url === "/slow-page") {
    const worker = new Worker("./worker-thread.js");
    // recieve j from work thread
    worker.on("message", (j) => {
      res.end(`Slow page ${j}`);
    });
  }
});

server.listen(8000, () => console.log("Server is running on port 8000"));
