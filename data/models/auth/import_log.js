/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('import_log', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    when_logged: {
      type: DataTypes.TIME,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'import_log'
  });
};
