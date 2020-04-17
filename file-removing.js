const fs = require('fs');

//fs.rmdirSync('./views');

//fs.unlinkSync('./views/new.html');

fs.renameSync('./newfile.js', 'views/newfile2.js');
