const Post = require('../models/Post');
const Category = require('../models/Category');

module.exports = {
    async index(req, res) {
        const {
            category_id
        } = req.params;

        const category = await Category.findByPk(category_id, {
            include: {
                association: 'posts'
            }
        });

        return res.json(category.posts);
    },

    async indexDate(req, res) {
        const {
            created_at 
        }= req.params;
        
        const date = await Post.findAll({
            where: {
                created_at 
            }
        });
        
        return res.json(date);
    },

    async indexAll(req, res) {
        const post = await Post.findAll();

        return res.json(post);
    },

    async store(req, res) {
        const {
            category_id
        } = req.params;
        const {
            title,
            description,
            resume
        } = req.body;

        const category = await Category.findByPk(category_id);

        if (!category) {
            return res.status(400).json({
                error: 'Category not found'
            });
        }

        const post = await Post.create({
            title,
            description,
            resume,
            category_id,
        });

        return res.json(post);
    },

    async delete(req, res) {
        const {
            id
        } = req.params;

        const post = await Post.findOne({
            where: {
                id
            }
        })

        await post.destroy(post);

        return res.json();
    },

    async update(req, res) {
        const {
            id
        } = req.params;
        const updated = await Post.update(req.body, {
            where: {
                id
            }
        });

        if (updated) {
            const post = await Post.findOne({
                where: {
                    id
                }
            });
            return res.json(post);
        }
    }
}