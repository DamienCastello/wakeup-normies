'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Report.belongsTo(models.Article, { foreignKey: 'articleId' });
    }
  }
  Report.init({
    userId: DataTypes.NUMBER,
    articleId: DataTypes.NUMBER,
    reason: DataTypes.STRING,
    details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};