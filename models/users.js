'use strict';
const {
  Model
} = require('sequelize');
const { encryptPwd } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.Review);
      users.hasMany(models.Movie);
      users.hasMany(models.MoviexCategory);
      users.hasMany(models.Category);
    }
  };
  users.init({
    fullname: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Full name must be filled.'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'Username must be filled'
        }
      }
    },
    profileimage:{
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      validate:{
        notEmpty:{
          msg: 'age must be inserted'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'choose your gender'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'email must be filled.'
        },
        isEmail:{
          msg:'email address must be email format.'
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'insert your password.'
        }
      }
    },
    role:{
      type: DataTypes.STRING,
    }
  }, {
    hooks:{
      beforeCreate(users){
        users.role = 'user'
        users.password = encryptPwd(users.password)
      }
    },
    sequelize,
    modelName: 'users',
  });
  return users;
};