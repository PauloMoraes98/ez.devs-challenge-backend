const Category = require('../models/Category');

module.exports = {
    async index(req, res) {
        const categories = await Category.findAll();

        return res.json(categories);
    },

    async store(req, res) {
        const {
            category
        } = req.body;

        const categ = await Category.create({
            category
        });

        return res.json(categ);
    },

    async delete(req, res) {
        const {
            id
        } = req.params;

        const category = await Category.findOne({
            where: {
                id
            }
        })

        await category.destroy(category);

        return res.json();
    },
}