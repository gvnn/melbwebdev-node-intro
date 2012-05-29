var socket = io.connect('http://localhost');
socket.on('clicked', function (data) {
  document.getElementById('message').innerText = "someone pressed the button!";
});
function emit() {
  socket.emit('clicked', true);
}