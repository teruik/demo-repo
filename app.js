const http = require('http'); 
const os = require('os'); //Node.jsのデフォルト機能でOS情報を取得してます
const port = 8080;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
  
    const hostname = os.hostname(); // OS情報は色々あるのですが、その中からホスト名だけを取ってきています
  
    response.write(JSON.stringify(hostname)); // ホスト名をJSON文字列で返します
    response.end();
  });

  server.listen(port, () => {
    console.log(`Server running on port ${port}`); //サーバを立ち上げたときにコンソールに出すメッセージです
  });
  
