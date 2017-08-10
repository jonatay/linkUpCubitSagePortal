/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cost_centre', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    registrations: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    purchase_types: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_vat: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'cost_centre'
  });
};
