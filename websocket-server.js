const webSocketServer = require('ws').Server;
const wss = new webSocketServer({port: 3232});

wss.on('connection', (ws)=>{


    ws.on('message', (message)=>{

      wss.clients.forEach((client)=>{
          client.send(message);
      });
      console.log(message);
    });

    console.log('We are connected');
});
