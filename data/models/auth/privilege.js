/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('privilege', {
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
    role_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resource_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rule: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'privilege'
  });
};
