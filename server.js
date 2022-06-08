const express = require('express');
const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');
const api = require('./starter/Develop/routes/index.js')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, 'starter/develop/public/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, 'starter/develop/public/notes.html'))
);

app.listen(PORT, () => {
    console.log(`This server is listening on ${PORT}!`);
});