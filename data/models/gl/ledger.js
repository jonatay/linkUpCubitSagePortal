/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ledger', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cubit_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    eref: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cubit_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    credit: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    debit: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    topacc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accnum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ctopacc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    caccnum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    caccname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tax_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tax_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cubit_company_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    acctype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    acc_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cacc_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ignore: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ignore_reason: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ledger'
  });
};
