const jwt = require('jsonwebtoken');

// Chave secreta para JWT
const SECRET_KEY = '2313707';


function gerarToken(mensagem) {
    const token = jwt.sign({ message: mensagem }, SECRET_KEY, { expiresIn: '1h' });
    return token;
}

function descriptografarToken(token) {

    if (!token) {
        return null;
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch (err) {
        return null;
    }
}

module.exports = { gerarToken, descriptografarToken };
