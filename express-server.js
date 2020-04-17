const express = require('express');

let app = express();

const port = process.env.PORT || 9999;

app.get('/', (req, res)=>{
  res.send('<h1>HELLO FROM Mohammed Amine</h1>');
});
app.get('/api', (req, res)=>{
  res.send('<h1 style="color:red;">API Page commit Successfuly');
});
app.listen(port);
console.log(`it's Working`);
