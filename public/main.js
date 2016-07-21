function onLoad() {
    var socket = io();
    var inputNode = document.getElementById("text");
    var messagesList = document.getElementById("messages");
    var textForm = document.getElementById("textForm");
    var button = document.getElementById("button");

    function onSubmit(evt) {
        socket.emit('chat message', inputNode.value);
        inputNode.value = "";
        evt.preventDefault();
    }
}
