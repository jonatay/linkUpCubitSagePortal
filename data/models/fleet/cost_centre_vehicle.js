/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cost_centre_vehicle', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cost_centre_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'cost_centre_vehicle'
  });
};
