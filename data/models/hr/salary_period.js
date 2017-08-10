/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('salary_period', {
		period_year: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		period_month: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'salary_period'
	});
};
