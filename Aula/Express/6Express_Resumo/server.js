// .env, onde fica as variavies de desenvolvimento
require('dotenv').config();
const express = require('express');
const app = express();

// mongoose, é quem modela a base de dados garantindo que os dados estejam na forma que esperamos
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=> {
        // app emite um evento avisando que já está conectado na base de dados
        app.emit('pronto');
    })
    .catch((e) => console.log(e));

// serve para identificar um navegador, salvando um cookie no navegador
const session = require('express-session');
// As sessões vão ser salvas dentro da base de dados, para não ficar sem memoria
const MongoStore = require('connect-mongo');
// mensagens autodestrutivas, usa uma vez e depois é apagada
const flash = require('connect-flash');
// rotas da nossa aplicação
const routes = require('./routes');
const path = require('path');
// recomendação do Express para deixar mais seguro
const helmet = require('helmet');
// Tokens para os formulários da aplicação
const csrf = require('csurf');
// Middlewares
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(helmet());
// para conseguir ler o body da url
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// arquivos estáticos que podem ser acessados diretamente
app.use(express.static(path.resolve(__dirname, 'public')));

// configurações da sessão
const sessionOptions = session({
    secret: 'asdasdasd',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

// views são os arquivos renderizados na tela
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

// aqui escuta o sinal emitido la em cima e começa a escutar requisições na porta :3000
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('servidor executando.');
    });
});
