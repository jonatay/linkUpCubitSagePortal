/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vouchers', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cut_off_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    account_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cost_centre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cost_centre_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    registration: {
      type: DataTypes.STRING,
      allowNull: true
    },
    batch: {
      type: DataTypes.STRING,
      allowNull: true
    },
    driver_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vehicle_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transaction_date: {
      type: DataTypes.TIME,
      allowNull: true
    },
    process_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    merchant_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    merchant_town: {
      type: DataTypes.STRING,
      allowNull: true
    },
    oil_company: {
      type: DataTypes.STRING,
      allowNull: true
    },
    odometer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuel_litres: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    oil_litres: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    private_usage: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    warnings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    purchase_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    toll_lane: {
      type: DataTypes.STRING,
      allowNull: true
    },
    toll_vehicle_class: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    toll_transaction_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    toll_match_indicator: {
      type: DataTypes.STRING,
      allowNull: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    toll_discount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    purchase_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cost_centre_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'vouchers'
  });
};
