const express = require('express');
const os = require('os');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.render('index', { hostname });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});