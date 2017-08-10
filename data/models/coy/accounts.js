/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accounts', {
    accid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    topacc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accnum: {
      type: DataTypes.STRING,
      allowNull: true
    },
    catid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    accname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    acctype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vat: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    clntid: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    div: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: '0'
    },
    toptype: {
      type: DataTypes.STRING,
      allowNull: true
    },
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
    is_master: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bank_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'accounts'
  });
};
