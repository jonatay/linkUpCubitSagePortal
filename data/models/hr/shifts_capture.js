/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shifts_capture', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		employee_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		employee_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		shifts_total: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		shifts_sunday: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		shifts_holiday: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		shifts_leave: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		shifts_sick: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		shifts_court: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		shifts_training: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		shifts_night: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		weeks_cleaning: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'shifts_capture'
	});
};
