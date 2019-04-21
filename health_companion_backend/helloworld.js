const express = require('express');
const showme = express();

showme.get('/', (req, res) => {
	res.send("Hellooooo World!");
});

showme.listen(3000, () => console.log('Server active on port '+ port + '.'));