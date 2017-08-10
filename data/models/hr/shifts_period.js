/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shifts_period', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		period_year: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		period_month: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		date_captured: {
			type: DataTypes.DATE,
			allowNull: true
		},
		date_processed: {
			type: DataTypes.DATE,
			allowNull: true
		},
		date_paid: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'shifts_period'
	});
};
