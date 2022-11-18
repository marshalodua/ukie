const ApiError     = require('../error/ApiError');
const AccountModel = require('../model/AccountModel');

module.exports = async (req, res, next) => {

    let query = await AccountModel.auth(req.params.token), account;

    if (query.length <= 0 || typeof query[0].account_id == undefined) {
        return next(ApiError.forbiden('Token not registered!', req.params.token));
    }

    account = query[0];

    let payDate = new Date(account.paydate);

    if (payDate < Date.now()) {
        return next(ApiError.forbiden('Your subscription has ended, please renew to access your data.', req.params.token));
    }

    req.account = {
        token: req.params.token
    };

    next();
}