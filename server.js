const express = require('express');
let ejs = require('ejs');
const app = express();
const port = process.env.PORT || 443;
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('../views/index');
});

app.get('/signup', (req, res) => {
  res.render('../views/signup');
});

app.get('/login', (req, res) => {
  res.render('../views/loggedin');
});



app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
