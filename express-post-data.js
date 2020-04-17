const express = require('express');
const bodyparser = require('body-parser');

let app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));


app.use('/', express.static(__dirname + '/public'));

app.use((req, res, next)=>{
  console.log('MIDDLEWARE');
  next();
});


app.post('/post', (req, res)=>{
  console.log(req.body);
});


app
app.listen(2020);
console.log('Its Okey !!!!')
