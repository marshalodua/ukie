const database = require('../database/index');

class Model {

    async getCategories(category_id = 0) {
        let db = await database();

        await db.query("SELECT category_id FROM category WHERE parent_id = ?;", [category_id]);

        let categories = db.rows();

        if (categories.length <= 0) {
            return null;
        }

        for(let index in categories) {
            categories[index]['description'] = await this.getCategoryDescription(categories[index].category_id);
        }

        for(let index in categories) {
            categories[index].childs = await this.getCategories(categories[index].category_id);

            if (categories[index].childs == null) {
                delete categories[index].childs;
            }
        }

        return categories;
    }

    async getCategory(category_id) {
        let db = await database();

        await db.query("SELECT category_id FROM category WHERE category_id = ?;", [category_id]);

        let category = db.rows();

        if (category.length != 1) {
            return null;
        }

        category = category[0];

        category.description = await this.getCategoryDescription(category_id);
        category.childs = await this.getCategories(category_id);
        
        if (category.childs == null) {
            delete category.childs;
        }

        return category;
    }

    async getCategoryDescription(category_id) {
        let db = await database();

        await db.query("SELECT l.code as language, l.iso, cd.name FROM category_description cd INNER JOIN language l ON l.language_id = cd.language_id WHERE cd.category_id = ?;", [category_id]);

        return db.rows();
    }

}

module.exports = new Model ();