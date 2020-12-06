'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Movie, { through: 'models.MoviexCategory' });
      Category.belongsTo(models.users);
    }
  };
  Category.init({
    genre: { 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Genre cannot be empty!."
        }
      }
    },
    userId: DataTypes.INTEGER  
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};