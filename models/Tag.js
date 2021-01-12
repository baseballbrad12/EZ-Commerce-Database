//import Sequelize library
const { Model, DataTypes } = require('sequelize');

//import databases connection
const sequelize = require('../config/connection.js');

//Initialize Tag model, extends from Model class.
class Tag extends Model {}

//Setting up fields an rules for Tag
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
