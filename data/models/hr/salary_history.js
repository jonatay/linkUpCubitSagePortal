/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('salary_history', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		employee_code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		salary_amount: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		effective_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'salary_history'
	});
};
