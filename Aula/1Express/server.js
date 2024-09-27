const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando.');
});