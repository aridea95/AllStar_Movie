'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.Category, { through: 'models.MoviexCategory'});
      Movie.belongsToMany(models.Character, { through: 'models.Movchar'});
      Movie.hasMany(models.Review);
      Movie.belongsTo(models.users);
    }
  };
  Movie.init({
    title: { 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Title cannot be empty!."
        }
      }
    }, 
    synopsis: { 
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: "Synopsis cannot be empty!."
        }
      }
    }, 
    year: { 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Year cannot be empty!."
        }
      }
    }, 
    trailer: { 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Trailer cannot be empty!."
        },
        isUrl : {
          msg: "Please input an URL format!"
        }
      }
    }, 
    poster: DataTypes.STRING,
    director: DataTypes.STRING,
    budget: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    ReviewId: DataTypes.INTEGER,
    sumRating: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};