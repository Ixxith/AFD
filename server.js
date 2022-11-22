const express = require('express');

let ejs = require('ejs');
const app = express();
const port = process.env.PORT || 443;

app.use(express.static('public'))


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('../views/index');
});

app.get('/signup', (req, res) => {
  res.render('../views/signup', {"redirect" : ""});
});

app.get('/signup/:redirect', (req, res) => {
  res.render('../views/signup', req.params);
});

app.get('/login', (req, res) => {
  res.render('../views/loggedin');
});

app.get('/about', (req, res) => {
  res.render('../views/about');
});

app.get('/api', (req, res) => {
  res.render('../views/api');
});

app.get('/upload', (req, res) => {
  res.render('../views/upload');
});

app.get('/task', (req, res) => {
  res.render('../views/task');
});



app.get('/dashboard', (req, res) => {
  res.render('../views/dashboard');
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
