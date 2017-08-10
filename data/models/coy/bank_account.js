/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank_account', {
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
    cubit_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cubit_company_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cubit_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    acc_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cubit_acc_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    acc_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    branch_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    branch_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    seq1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seq2: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'bank_account'
  });
};
