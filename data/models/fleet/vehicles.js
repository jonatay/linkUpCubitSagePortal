/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('vehicles', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    account_number: {
      type: DataTypes.CHAR,
      allowNull: true,
    },
    cost_centre: {
      type: DataTypes.CHAR,
      allowNull: true,
    },
    registration: {
      type: DataTypes.CHAR,
      allowNull: true,
    },
    driver_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vehicle_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'vehicles',
  });
};
