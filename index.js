const express = require('express');
const mustache = require('mustache-express');
const users = require('./config/user');
// const authRoutes = require('./rotas/auth');

const servidor = express();

servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));

// servidor.use('/auth', authRoutes);

servidor.engine('mustache', mustache());
servidor.set('view engine', 'mustache');
servidor.set('views', __dirname + '/views');

servidor.get('/login', (req, res) => {
    res.render ('login');
})

servidor.get('/registrar', (req, res) => {
    res.render('registrar');
})

servidor.post('/registro', (req, res) => {
    const { username, password } = req.body;
    
    users.addUser(username, password, (err) => {
        if (err) {
            res.status(500).send(err); return;
        }
        res.status(200).send("Usuario Cadastrado :)");
    })
})

servidor.listen (3000, () => {
    console.log ("Rodando, na porta 3000...");
});     