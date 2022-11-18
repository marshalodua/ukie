const ApiError      = require("../error/ApiError");
const UserModel     = require("../model/UserModel");

class UserController {

    async login(req, res, next) {
        res.json({ok: true, message: 'login'});
    }

    async auth(req, res, next) {
        res.json({ok: true, message: 'auth'});
    }

    async getAll (req, res, next) {
        res.json({ok: true, message: 'getAll'});
    }

}

module.exports = new UserController ();