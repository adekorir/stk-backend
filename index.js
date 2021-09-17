const express = require('express');

let app = express();

function handleGet(req, res) {
    res.send('hello world'); 
}

app.use('/', express.static('public'));

app.get('/hello', handleGet);

app.listen(8080, () => {
    console.log('Server running on port 8080...');
});