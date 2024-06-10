const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./rotas/auth');

const servidor = express();

servidor.use(bodyParser.urlencoded({ extended: true }));
servidor.use(express.json());
servidor.use('/auth', authRoutes);

servidor.listen (3000, () => {
    console.log ("Rodando, na porta 3000...");
});     