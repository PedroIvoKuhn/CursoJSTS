exports.paginaInicial = (req, res) => {
    // session
    // req.session.usuario = { nome: 'Pedro', logado: true};
    // console.log(req.session.usuario);

    // flash
    // req.flash('OLA', 'olá muindo');
    // console.log(req.flash('OLA'));
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};