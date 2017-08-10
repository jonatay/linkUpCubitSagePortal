/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_account', {
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
    account_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cubit_accid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    topacc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accnum: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'company_account'
  });
};
