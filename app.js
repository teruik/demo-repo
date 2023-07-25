const http = require('http');
const os = require('os');


const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');

  const hostname = os.hostname();

  response.write(JSON.stringify(hostname));
  response.end();
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});