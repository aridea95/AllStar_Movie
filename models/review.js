'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Movie);
      Review.belongsTo(models.users);
    }
  };
  Review.init({
    content: DataTypes.TEXT,
    rating: {
      type: DataTypes.INTEGER,
      validate : {
        min: 0,
        max: 10,
        isNumeric: {
          msg: "Input rating between 0 - 10!"
        }
      }
    },
    userId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};