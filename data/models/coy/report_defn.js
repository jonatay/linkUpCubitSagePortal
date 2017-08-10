/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('report_defn', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rpt_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fld_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fld_seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pdf_head: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pdf_width: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htm_head: {
      type: DataTypes.STRING,
      allowNull: true
    },
    htm_width: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_curr: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_cr: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    text_align: {
      type: DataTypes.STRING,
      allowNull: true
    },
    no_dec: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'report_defn'
  });
};
