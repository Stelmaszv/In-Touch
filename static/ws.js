let url= 'ws://127.0.0.1:8000/test'
var socket =new WebSocket(url)
socket.onmessage=function(e){
  console.log(e.data)
  document.getElementById("chat-log").innerHTML=e.data
}
socket.onpen=function(e){
  console.log('onpen')
  console.log('onpoen',e.data)
}
socket.onerror=function(e){
  console.log('onerror')
  console.log(e)
}
socket.onclose=function(e){
  console.log('onclose')
  console.log(e)
}