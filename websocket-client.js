const ws = new WebSocket('ws://localhost:3232');

ws.onmessage = (payload)=>{
    console.log(payload.data);
};
ws.onopen = ()=>{
    displayTitle('Connected To The Server');
};
ws.onclose = ()=>{
    displayTitle('Disconnected To The Server');
};

function displayTitle(title){
  document.querySelector('h1').innerHTML = title;
}

document.forms[0].onsubmit = ()=>{

  let input = document.getElementById('message');
  console.log(input.value);
  ws.send(input.value);
};
