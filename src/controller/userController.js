// controlar o que vai ser feito em uma requisição
const userModel = require('../model/userModel');


//Função que executa o metodo da camada model 
const getAllUsers = (req, res) => {
    const users = userModel.findAll();
    //se der certo transforme o user em json
    res.status(200).json(users);
}


//exportando o metodo getAllUsers
module.exports = {
    getAllUsers
}

