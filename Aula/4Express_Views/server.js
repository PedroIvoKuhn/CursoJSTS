const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

// para conseguir ler o body da url
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('servidor executando.');
});