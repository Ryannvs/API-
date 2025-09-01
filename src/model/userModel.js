//Simulação de um banco de dados em memória 
//se tem colchetes é array
let users = [
    {id:1, name: 'Victor',email: 'victor@gmail.com'},
    {id:2, name: 'Marcos',email: 'marcos@gmail.com'},
    {id:3, name: 'Tiago',email: 'tiago@gmail.com'},
];

//Função para buscar todos os usuários
const findAll = () => {
    return users;
}

// Função para buscar um usuário por id
const findById = (id) => {
    // pra cada item do meu array user, ele vai receber o id 
    // e vai fazer a comparação vai percorrer todos os itens
    // e quando o user.id, for igual a id
    // retorna o objeto
    return users.find(user => user.id === id);
}

//Função que adiciona um novo usuário 
const create = (newUser) => {
    //ternario 
    //se user.length for maior que 0, 
    // diminuindo -1 por conta que começaria no 0 
    // + 1 para gerar o próximo id sequencial
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    // Cria um novo objeto de usuário
    // ...newUser (spread operator) copia os dados do novo usuário (nome, email)
    // e adiciona a propriedade 'id' com o valor que calculamos
    // tudo que veio no ...new user
    const userWithId = {id: newId, ...newUser};

    // Adiciona o usuário recém-criado ao nosso array 'users'
    users.push(userWithId);

    // Retorna o usuário completo que acabamos de adicionar
    return userWithId;
}

// Exportar as funções
module.exports = {
    findAll,
    findById,
    create
}