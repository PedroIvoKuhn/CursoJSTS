exports.paginaInicial = (req, res) => {
    // session
    // req.session.usuario = { nome: 'Pedro', logado: true};
    // console.log(req.session.usuario);

    // flash
    // req.flash('OLA', 'olá muindo');
    // console.log(req.flash('OLA'));
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};