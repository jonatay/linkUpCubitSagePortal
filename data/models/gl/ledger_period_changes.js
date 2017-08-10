/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ledger_period_changes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ledger_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cubit_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    old_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    old_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    new_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    new_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ledger_period_changes'
  });
};
