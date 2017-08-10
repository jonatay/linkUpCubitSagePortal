/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('import_master', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sp_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    imp_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    monthly: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dest_table: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sp_rollover_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'import_master'
  });
};
