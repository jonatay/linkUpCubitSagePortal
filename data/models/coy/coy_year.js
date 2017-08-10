/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coy_year', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cubit_company_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    yrname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    yrdb: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    yr: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'coy_year'
  });
};
