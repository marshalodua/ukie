const ApiError      = require('../error/ApiError');
const CategoryModel = require('../model/CategoryModel');

class CategoryController {

    async get(req, res, next) {
        let category = await CategoryModel.getCategory(req.params.id);
        
        if (!category) {
            return next(ApiError.notFound('Undefined category!', req.account.token))
        }

        res.json({
            ok: true,
            data: category
        });
    }

    async getAll(req, res, next) {
        res.json({
            ok: true,
            data: await CategoryModel.getCategories()
        });
    }
}

module.exports = new CategoryController ();