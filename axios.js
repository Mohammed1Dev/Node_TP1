const axios = require('axios');

let username = 'Mohammed1Dev';

axios.get('https://api.github.com/users/' + username).then((res)=>{

      console.log(res.data);
}).catch((err)=>{

      console.log(err);
});
