/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('salary_shifts', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		employee_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		salary_period: {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: '200701'
		},
		salary_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		shifts_total: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		shifts_sunday: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		shifts_holiday: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		shifts_leave: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		shifts_sick: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		shifts_court: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		shifts_night: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		weeks_cleaning: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		shifts_termination: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		salary_bruto: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		salary_hourly_rate: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		hours_total: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		hours_sunday: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		hours_holiday: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		hours_leave: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		hours_normal: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		hours_normal_total: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		hours_overtime: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		salary_normal: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		salary_sunday: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		salary_holiday: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		allowance_night: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		allowance_cleaning: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		allowance_termination: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		total_pay: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		is_forced: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		salary_overtime: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			defaultValue: '0'
		},
		employee_code: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'salary_shifts'
	});
};
