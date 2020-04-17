const fs = require('fs');
fs.writeFile('./modules/data.html', `\nHello this our file\n`, 'utf8', (err)=>{
    if(err) return err;

    console.log("the file has been created !!!");
});

fs.appendFile('./modules/data.html', `\nExtra file has been appended\n`, 'utf8', (err)=>{
    if(err) return err;

    console.log("the file has been created !!!");
});
