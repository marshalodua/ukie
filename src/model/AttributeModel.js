const database = require('../database/index');

class Model {

    async getAttributes() {
        let db = await database();

        //db.query("SELECT ");
    }

}

module.exports = new Model ();