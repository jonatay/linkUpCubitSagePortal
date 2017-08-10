/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_setting', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cubit_company_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    set_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    set_value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    set_array: {
      type: "ARRAY",
      allowNull: true
    }
  }, {
    tableName: 'company_setting'
  });
};
