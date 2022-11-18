const ApiError      = require("../error/ApiError");
const SupplierModel = require("../model/SupplierModel");

class SupplierController {

    async get(req, res, next) {
        let supplier = await SupplierModel.getSupplier(req.params.id);

        if (!supplier) {
            return next(ApiError.notFound('Supplier not found!', req.account.token));
        }

        res.json({
            ok: true,
            data: supplier
        });
    }

    async getAll(req, res, next) {
        res.json({
            ok: true,
            data: await SupplierModel.getSuppliers()
        });
    }
}

module.exports = new SupplierController ();