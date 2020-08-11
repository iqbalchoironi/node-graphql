const express = require('express');
const app = express();

const { graphqlHTTP } = require('express-graphql');
const schema = require('./lib/graphql');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/footbal');
const db = mongoose.connection;
db.on('error', () => {
    console.log('error connect to DB')
}).once('open', () => {
    console.log('connected to DB');
})

app.get('/', (req, res) => {
    res.send('OK');
});

app.use('/graphql', graphqlHTTP(() => ({
        schema,
        graphiql: true,
        pretty: true
})));

app.listen(1945, () => {
    console.log('server listen to PORT 1945')
});