var http = require('http');

//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('Hello World!');
//}).listen(8080);

var SerialPort = require('serialport');


SerialPort.list(function (err, ports) {
    ports.forEach(function(port) {
        console.log(port.comName);
        console.log(port.pnpId);
        console.log(port.manufacturer);
    });
});



var port = new SerialPort('/dev/tty.wchusbserial14640', {
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.on('data', function (data) {
    console.log('Data:', data.toString());
});

port.on('error', function(err) {
    console.log('Error: ', err.message);
})
port.on('close', function(err) {
    console.log('ARDUINO PORT CLOSED');
})

function function2()
{
    port.write('G1F100\n');
    port.write('G1X200\n');
}


setTimeout(function2, 5000);



