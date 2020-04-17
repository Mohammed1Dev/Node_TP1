const express = require('express');

let app = express();

app.get('/', (req, res)=>{
  res.send('<h1>This is Our Home</h1>');
});
app.get('/post/:id/category/:category_id', (req, res)=>{
  res.send(`
          <p>Here is ${req.params.id}</p>
          <p>Here is ${req.params.category_id}</p>


    `);
});

app.listen(8888);
console.log('Its Done Successfuly');
