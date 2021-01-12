//import Sequelize library
const { Model, DataTypes } = require('sequelize');

//import databases connection
const sequelize = require('../config/connection');

//Initialize ProductTag model, extends from Model class.
class ProductTag extends Model {}

//Setting up fields an rules for ProductTag
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        id: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        id: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
