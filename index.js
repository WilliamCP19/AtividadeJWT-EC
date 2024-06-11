const express = require('express');
const mustache = require('mustache-express');
const tokenJWT = require('./rotas/auth');

const servidor = express();

servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));

// servidor.use('/auth', authRoutes);

servidor.engine('mustache', mustache());
servidor.set('view engine', 'mustache');
servidor.set('views', __dirname + '/views');

servidor.get('/', (req, res) => {
    res.render('gerarToken');
})

servidor.get('/token', (req, res) => {
    res.render('token')
})

servidor.post('/gerando-token', (req, res) => {
    const mensagem = req.body.msg;
    res.render('token', {
        token : tokenJWT(mensagem)
    });
})

servidor.listen (3000, () => {
    console.log ("Rodando, na porta 3000...");
});     