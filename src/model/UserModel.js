const database = require('../database/index');

class Model {

    async getUser(token) {
        let db = await database();
        await db.query("SELECT * FROM user WHERE token = ?", [token]);

        console.log(db.rows());
    }

}

module.exports = new Model();