function main() {

    
    var socket = io.connect('http://localhost:3000');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById("deleteT")
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function delmassege(a) {
       socket.emit('uzum em jnjem');
    }
    button.onclick = handleSubmit;
    del.onclick = delmassege;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
    function deleteTags() {
var paragraphs = document.getElementsByTagName("p");

        for (var i in paragraphs) {
            paragraphs[0].remove();
            if(paragraphs.length == 0){
                break;
            }

        }

    }

    
    socket.on("dhima el teqstery du jnji", deleteTags); 
}


window.onload = main;


