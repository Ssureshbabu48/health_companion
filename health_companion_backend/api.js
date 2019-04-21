const express = require('express');
const sense = express();
const morgan = require("morgan");
const localtunnel = require('localtunnel');


const port = 2100;

const postroutes = require('./routes/routes');

sense.use(morgan("dev"));

sense.use('/', postroutes);
sense.use('/pulse', postroutes);
sense.use('/temperature', postroutes);

sense.listen(port, ()=> {
	console.log('Server listening on port ' + port + '.');
});

const tunnel = localtunnel(port, {subdomain: 'sensors'}, (err, tunnel) => {
    console.log('Connecting to Tunnel');
});

tunnel.on('close', function() {
    console.log('Tunnel is closed');// When the tunnel is closed
});