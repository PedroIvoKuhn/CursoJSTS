const express = require('express');
const app = express();
const routes = require('./routes')

// para conseguir ler o body da url
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando.');
});