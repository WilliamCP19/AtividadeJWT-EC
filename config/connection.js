const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#Mysql2313707', // Senha do Banco
  database: 'jwt_ec48b'
});

connection.connect((err) => {
  if (err) {
    console.log("\nCONEXÃO COM O BANCO DE DADOS NÃO REALIZADA!\n",err.message);
  } else {
    console.log('Conexão com o banco de dados estabelecida!');
  }
});

module.exports = connection;