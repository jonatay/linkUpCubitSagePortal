/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stats', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    identity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    start: {
      type: DataTypes.TIME,
      allowNull: true
    },
    finish: {
      type: DataTypes.TIME,
      allowNull: true
    },
    msec: {
      type: DataTypes.REAL,
      allowNull: true
    }
  }, {
    tableName: 'stats'
  });
};
