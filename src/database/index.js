const pool = require('./pool');

var init = async () => {
    let poolConnections = await pool;
    let node = await poolConnections.getConnection().catch(err => err);

    if ('errno' in node) {
        console.error(`${node.sqlMessage}`);
        poolConnections = null;
    } else {
        node.release();
    }

    var database = new db ();

    database._db = poolConnections;

    return database;
}


class db {
    _db = null;
    _rows = [];
    _fields = [];

    async query(sql, params = []) {
        this._rows = [];
        this._fields = [];

        if (this._db == null) {
            return;
        }

        let node = await this._db.getConnection();
        let [rows, fields] = await node.execute(sql, params);
        node.release();
        this._rows = rows;
        this._fields = fields;
    }

    rows() {
        return this._rows;
    }

    fields() {
        return this._fields;
    }

    isConnected() {
        return (this._db != null ? true : false);
    }
}

module.exports = init;