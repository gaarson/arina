const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../public')));

//app.post('/api/add_photo', require('./controller/admin.js'));
//app.get('/home', require('./controller/home.js'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

db.connect(err => {
  if(err) return console.log(err);

  app.listen(PORT, () => {
    console.log('server on ' + PORT);
  });
})
