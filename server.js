const express = require('express');
const app = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(1945, () => {
    console.log('server listen to PORT 1945')
});