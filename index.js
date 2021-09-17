const express = require('express');

let app = express();

app.get('/', (req, res) => {
    console.log('hello world');
    res.send('reply: hello'); 
});

app.listen(8080, () => {
    console.log('Server running on port 8080...');
});