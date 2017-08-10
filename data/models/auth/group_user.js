/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_user', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'group_user'
  });
};
