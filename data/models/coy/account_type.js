/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    account_type: {
      type: DataTypes.STRING,
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
    cubit_company_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    report_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_control: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    super_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    topacc_to: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'account_type'
  });
};
