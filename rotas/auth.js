// const express = require('express');
// const conexao = require('../config/connection');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// const router = express.Router();

// // Chave secreta para JWT
// const SECRET_KEY = '2313707';

// // Usuários em memória (apenas para exemplo, use um banco de dados na prática)
// // const users = [];

// // Rota de registro
// router.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   // Verificar se o usuário já existe
//   const userExists = users.some(user => user.username === username);
//   if (userExists) {
//     return res.status(400).json({ message: 'Usuário já existe' });
//   }

//   // Criptografar a senha
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Adicionar usuário à lista
//   users.push({ username, password: hashedPassword });
  
//   res.status(201).json({ message: 'Usuário registrado com sucesso' });
// });

// // Rota de login
// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Encontrar o usuário
//   const user = users.find(user => user.username === username);
//   if (!user) {
//     return res.status(400).json({ message: 'Usuário ou senha inválidos' });
//   }

//   // Verificar a senha
//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) {
//     return res.status(400).json({ message: 'Usuário ou senha inválidos' });
//   }

//   // Gerar o token JWT
//   const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

//   res.json({ token });
// });

// module.exports = router;
