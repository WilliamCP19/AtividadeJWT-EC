# Atividade de JWT com NodeJS
<h4>Projeto desenvolvido para a disciplina de Programação Back-End da Universidade Tecnológica Federal do Paraná.</h4>

Todos os pacotes necessários já estão incluidos no projeto!

**Aplicação desenvolvida usando NodeJS e Express. Utilizei o Mustache como Template para as páginas.**

## Layouts das Telas

<h4>Rota '/'</h4>

![Página Principal](https://github.com/WilliamCP19/AtividadeJWT-EC48B/blob/main/images/Tela%20Principal.png)
<h5>Página para que o usuário digite no TextArea a mensagem que deseja criptografar com JWT.</h5>

***
<h4>Rota '/token'</h4>

![Página que Mostra o Token](https://github.com/WilliamCP19/AtividadeJWT-EC48B/blob/main/images/Tela%20Token.png)
<h5>Página que irá mostrar ao usuário o token gerado, para ser armazenado.</h5>
<h5>Caso o usuário já possua um token, pode acessar esta rota diretamente!</h5>

***
<h4>Esta Página não é acessável pelo usuário diretamente (porque é necessário o token que é fornecido via body.)</h4>

![Página que Mostra a Mensagem Original](https://github.com/WilliamCP19/AtividadeJWT-EC48B/blob/main/images/Tela%20Mensagem%20Final.png)
<h5>Caso não seja fornecido um token ou, o token fornecido for inválido, a mensagem apresentada será como na imagem</h5>
<h5>Caso contrário, o usuário verá a mensagem original.</h5>

*Por fim, há dois links: 
- 1º para fornecer um token já existente;
- 2º para gerar um novo token (com uma nova mensagem).

**O Fluxo se Reflete...**
