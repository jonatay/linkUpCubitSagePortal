/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('import_periods', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    per_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    per_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'import_periods'
  });
};
