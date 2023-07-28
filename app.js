const http = require('http');
const os = require('os');
const port = 8080;
const express = require('express'); // HTMLを記述したファイルを扱うためのおまじない
const app = express(); // 上に同じ


app.set('view engine', 'ejs');
app.set('views', './views'); // viewsディレクトリ内の.ejsファイルを読み込む為のおまじない

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.render('index', { hostname });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
