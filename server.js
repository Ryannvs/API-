//Importar o módulo Express 
const express = require('express');

//Criar uma aplicação express
const app = express();

//Definir a porta do servidor que irá escutar
const porta = 8000;

//Definir a rota de teste API
            //req e res são parametros, quando chamar a função get(tipo de requisição) http get
            // a "/" é a rota 
            //req request
            //res é a (resposta) e é o objeto que o servidor usa para enviar os dados de volta para o cliente
app.get('/', (req, res) => {
    res.send("API funcionando");
})

//Inicia o servidor
app.listen(porta, ()=> {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})