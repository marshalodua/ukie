const database = require('../database/index');

class Model {

    async auth(token) {
        let db = await database();

        await db.query('SELECT a.account_id, acs.paydate FROM `account` AS a INNER JOIN `account_status` AS acs ON acs.account_id = a.account_id WHERE a.token = ? LIMIT 1;', [token]);

        return db.rows();
    }

}

module.exports = new Model ();