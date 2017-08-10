/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_types', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'purchase_types'
  });
};
