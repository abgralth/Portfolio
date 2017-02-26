var connection = new WebSocket('ws://obscure-waters-98157.herokuapp.com');

// When the connection is open, send some data to the server
connection.onopen = function () {
  //connection.send('Pingu'); // Send the message 'Ping' to the server
};

// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
  console.log('Server: ' + e.data);
  //document.getElementById("chat").innerHTML = e.data ;
  //tab.push(e.data);
  document.getElementById("chat").innerHTML += "<p>" + e.data + "</p>" ;
};
// Sending String
//connection.send('your message');
//tab.push("Swaggity Swooty")
//console.log(tab);
function send()
{
  var txt = document.getElementById("name").value;
  connection.send(txt);
}
