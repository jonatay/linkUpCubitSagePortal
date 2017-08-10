/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cashbook', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cashid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trantype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bankid: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descript: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cheqnum: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    banked: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accinv: {
      type: DataTypes.STRING,
      allowNull: true
    },
    supid: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    cusnum: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    rinvids: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amounts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    invprds: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ids: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    purids: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pamounts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pdates: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    accids: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    suprec: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    vat: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    chrgvat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vats: {
      type: DataTypes.STRING,
      allowNull: true
    },
    chrgvats: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rages: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    famounts: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lcashid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fcid: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    opt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    vatcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vatcodes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    multicusnum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    multicusamt: {
      type: DataTypes.STRING,
      allowNull: true
    },
    empnum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    bankrecon_ticked: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'no'
    },
    cubit_company_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ledger_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bank_account_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    caccount_id: {
      type: DataTypes.INTEGER,
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
    tran_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tran_date: {
      type: DataTypes.DATE,
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
    }
  }, {
    tableName: 'cashbook'
  });
};
