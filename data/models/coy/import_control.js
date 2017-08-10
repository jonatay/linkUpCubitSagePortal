/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('import_control', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    last_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_when: {
      type: DataTypes.TIME,
      allowNull: true
    },
    cubit_company_code: {
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
    imp_type: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'ledger'
    },
    is_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    per_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sp_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rec_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    err_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fail_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    needs_rollover: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sp_rollover_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'import_control'
  });
};
