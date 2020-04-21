const {
    Model,
    DataTypes
} = require('sequelize');

class Post extends Model {
    static init(connection) {
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            resume: DataTypes.STRING,
            created_at: DataTypes.DATEONLY
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        })
    }
}

module.exports = Post;