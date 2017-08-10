/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('leave_tran', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		date_applied: {
			type: DataTypes.DATE,
			allowNull: true
		},
		date_from: {
			type: DataTypes.DATE,
			allowNull: true
		},
		date_to: {
			type: DataTypes.DATE,
			allowNull: true
		},
		working_days: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		employee_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		leave_type_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'leave_tran'
	});
};
