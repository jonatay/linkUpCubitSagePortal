/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tran_batch_store', {
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
    data: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cubit_company_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_cache: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'tran_batch_store'
  });
};
