const express = require('express');
const http = require('http');
const os = require('os');
const app = express();
const port = 8080;

// /* 改修するときには左端のコメントアウトを削除
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
  
    const hostname = os.hostname();
  
    response.write(JSON.stringify(hostname));
    response.end();
  });

  server.listen(8080, () => {
    console.log(`Server running on port ${port}`);
  });
  
//   改修するときには左端のコメントアウトを削除 */ 

/* //改修するときには左端のコメントアウトを削除
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.render('index', { hostname });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
*/ //改修するときには左端のコメントアウトを削除 
