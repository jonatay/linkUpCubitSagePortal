/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menu', {
    seq: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    menu_text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    menu_link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    controller_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    action_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    params: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'menu'
  });
};
