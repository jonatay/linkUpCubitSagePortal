/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('insurance_fleet', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_nbr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    make_model: {
      type: DataTypes.STRING,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    registration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cover_basis: {
      type: DataTypes.STRING,
      allowNull: true
    },
    use: {
      type: DataTypes.STRING,
      allowNull: true
    },
    security_system: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    no_claim: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    limit_indemnity: {
      type: "MONEY",
      allowNull: true
    },
    premium: {
      type: "MONEY",
      allowNull: true
    }
  }, {
    tableName: 'insurance_fleet'
  });
};
