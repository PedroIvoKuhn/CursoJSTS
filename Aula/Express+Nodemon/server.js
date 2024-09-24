const express = require('express');
const app = express();

// para conseguir ler o body da url
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/testes/:id_users?', (req, res) => {
    // http://localhost:3000/testes/123
    console.log(req.params);
    // http://localhost:3000/testes?nome=pedro&sobrenome=kuhn
    console.log(req.query);
    
    res.send('oi')
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('chegou!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando.');
});