const http = require('https');
const express = require('express');
const path = require('path');

const app = express();

let getData = () => {
    //O seu método de leitura do arquivo vem aqui
    return 'qualquer que seja o seu resultado aqui';
}

app.get('/data', (req, res) => {
    res.send(getData());
});

app.get('/', (req, res) => {
    console.log(path.join(__dirname + '/index.html'))
    res.sendFile(path.join(__dirname + '/index.html'));
});

http.createServer(app).listen(8080, () => {
    console.log('server funcionando');
});