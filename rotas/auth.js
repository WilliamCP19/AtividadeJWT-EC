const users = require('../config/user');
const jwt = require('jsonwebtoken');

// Chave secreta para JWT
const SECRET_KEY = '2313707';


function gerarToken () {
    const token = jwt.sign({ message: message }, SECRET_KEY, { expiresIn: '1h' });
    return message+"\nToken:\n"+token;
}

module.exports = gerarToken;
