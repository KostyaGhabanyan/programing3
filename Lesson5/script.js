function main() {
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var Delete = document.getElementById("Delete")
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function delmassege(a) {
        socket.emit("uzum em lriv jnjem");
    }
    button.onclick = handleSubmit;
    Delete.onclick = delmassege;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
   function deleteTags() {
        delmassege("p").remove("test");
    }
  

    socket.on("dhima el teqstery du jnji", deleteTags); { }
    window.onload = main;
    socket.emit("uzum em lriv jnjem");
}


window.onload = main;


