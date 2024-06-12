const express = require("express");
const mustache = require("mustache-express");
const tokenJWT = require("./auth");

const servidor = express();

servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));

servidor.engine("mustache", mustache());
servidor.set("view engine", "mustache");
servidor.set("views", __dirname + "/views");

//Rota Principal (Inicie nesta rota)
servidor.get("/", (req, res) => {
    res.render("gerarToken");
});

//Rota para fornecer um token. (Se já possuir um token acesse esta rota)
servidor.get("/token", (req, res) => {
    res.render("token");
});

servidor.post("/gerando-token", (req, res) => {
    const mensagem = req.body.msg;
    res.render("token", {
        token: tokenJWT.gerarToken(mensagem)
    });
});

servidor.post("/descriptografando-token", (req, res) => {
    const token = req.body.token;
    const mensagem = tokenJWT.descriptografarToken(token);
    
    if (mensagem == null) {
        res.render('mensagem', {
            mensagem: "Este Token NÂO é Válido!"
        })
    } else {
        res.render('mensagem', {
            mensagem: mensagem.message
        })
    }
    
});

servidor.listen(3000, () => {
    console.log("Rodando, na porta 3000...");
});
