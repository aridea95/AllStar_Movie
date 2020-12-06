'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MoviexCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MoviexCategory.belongsTo(models.Movie);
      MoviexCategory.belongsTo(models.Category);
      MoviexCategory.belongsTo(models.users);
    }
  };
  MoviexCategory.init({
    MovieId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    hooks : {
      beforeCreate(moviexcategory, options){
        moviexcategory.MovieId = moviexcategory.MovieId || 0;
        moviexcategory.CategoryId = moviexcategory.CategoryId || 0;
      }
    },
    sequelize,
    modelName: 'MoviexCategory',
  });
  return MoviexCategory;
};