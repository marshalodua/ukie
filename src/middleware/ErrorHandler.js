const ApiError = require('../error/ApiError');

module.exports = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ ok: false, message: err.message, token: err.token });
    }

    return res.status(500).json({ ok: false, message: "Undefined error!" });
}