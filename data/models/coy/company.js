/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
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
    cubit_company_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    psira_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    employee_code_prefix: {
      type: DataTypes.STRING,
      allowNull: true
    },
    paye_number: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'company'
  });
};
