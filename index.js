var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// var serialport = require('serialport'),			// include the serialport library
// 	SP0  = serialport.SerialPort,			// make a local instance of serial
// 	portName = '/dev/ttyACM0',								// get the port name from the command line
// 	portConfig = {
// 		baudRate: 9600,
// 		parser: serialport.parsers.readline('\n')
// 	};
// var myPort0 = new SP0(portName, portConfig);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use("/bower_components", express.static(__dirname + "/bower_components"));
app.use("/scripts", express.static(__dirname + "/scripts"));
app.use("/res", express.static(__dirname + "/public"));
app.use("/gcomponent", express.static(__dirname + "/gcomponent"));
app.use("/fonts", express.static(__dirname + "/fonts"));
io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });

    // myPort0.on('data', function(data) {
    //   socket.emit('SP0', data);		// send the data to the client
    // });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
