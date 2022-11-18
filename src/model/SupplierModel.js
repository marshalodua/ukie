const database = require('../database/index');

class Model {

    async getSuppliers() {
        let db = await database();

        await db.query("SELECT * FROM supplier");

        return db.rows();
    }

    async getSupplier(supplier_id) {
        let db = await database();

        await db.query("SELECT * FROM supplier WHERE supplier_id = ?;", [supplier_id]);

        let supplier = db.rows();

        if (supplier.length != 1) {
            return null;
        }

        return supplier[0];
    }

}

module.exports = new Model ();