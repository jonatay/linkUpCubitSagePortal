/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('employee_index', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cubit_company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		employee_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		employee_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		cubit_empnum: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		start_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		end_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		id_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		salary: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		when_update: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'employee_index'
	});
};
