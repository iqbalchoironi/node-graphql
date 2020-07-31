const express = require('express');
const e = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(1945, () => {
    console.log('server listen to PORT 1945')
});