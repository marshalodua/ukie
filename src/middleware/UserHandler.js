const userModel = require('../model/UserModel');

module.exports = async (req, res, next) => {
    let token = req.params.token;

    await userModel.getUser(token);

    next();
}