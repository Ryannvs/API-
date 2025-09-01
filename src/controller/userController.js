const userModel = require('../src/model/userModel');


const getAllUsers = (req, res) => {
    const users = userModel.getAllUsers();
    res.status(200).json(users);
}

module.exports = {
    getAllUsers
}

