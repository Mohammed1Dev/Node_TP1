const emitter = require('./modules/sendEmail');


emitter.on('emailEvent', (message)=>{
    console.log(`Email : ${massage}`);
});

emitter.emit('emailEvent', 'Send activation to user after registration');
