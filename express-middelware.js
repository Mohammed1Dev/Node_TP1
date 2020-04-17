const express = require('express');
const fs = require('fs');

let app = express();

app.use('/css', express.static(__dirname + '/public'));


app.use((req, res, next)=>{
    console.log('MIDDLEWARE');
    next();
});
app.get('/', (req, res)=>{
  res.send(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" href="/css/style.css"
      </head>
      <body>
        <h1>Mohammed AMine Bettaoui</h1>
        <h2>Mohammed AMine Bettaoui</h2>

        <h3>Mohammed AMine Bettaoui</h3>

        <h4>Mohammed AMine Bettaoui</h4>

        <h5>Mohammed AMine Bettaoui</h5>

        <h6>Mohammed AMine Bettaoui</h6>


        <h7>Mohammed AMine Bettaoui</h7>


      </body>
    </html>


    `);
});

app.listen(9999);

console.log(`it's Working`);
