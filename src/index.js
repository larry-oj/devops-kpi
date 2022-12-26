import http from 'http';

const PORT = 3000;

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Pong!');
  })
  .listen(PORT, () => console.log(`Server listening on port ${PORT}`));
