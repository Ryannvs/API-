// controlar o que vai ser feito em uma requisição
const userModel = require('../model/userModel');


//Função que executa o metodo da camada model 
const getAllUsers = (req, res) => {
    const users = userModel.findAll();
    //se der certo transforme o user em json
    res.status(200).json(users);
}

// Método do controlador para obter um usuario por id
const getUserById = (req, res) => {

    // Pegando o id que foi enviado na requisição 
    // id sendo passado pelo req, parametro que manipula os dados que veio pela requisição
    // res é a resposta da requisição 
    // req.params.id | pegue o parametro id 
    const id = parseInt(req.params.id);
    
    //Chamando o método findById do userModel
    const user = userModel.findById(id);

    if (user) {
        //Responder com status code de 200 (Sucesso!)
        // e devolver os dados do usuario em formato json
        res.status(200).json(user);
        //se não tiver sucesso
    } else {
        //devolver um 
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!' });
    }
};

//Método do controlador para criar um novo usuario
const createUser = (req, res) => {
    // Pegando os dados que foram enviador pelo Body da requisição
    //Desestruturação, pegando algo estruturado e guardo em variáveis
    const {name, email} = req.body;

    //validar se foram enviados
    if(!name || !email) {
        return res.status(400).json({mensagem: "Nome e email são campos obrigatórios!"});
    } else {
        const newUser = userModel.create({name, email});
        res.status(201).json(newUser);
    }
}


//exportando o metodo getAllUsers
module.exports = {
    getAllUsers,
    getUserById,
    createUser
}

