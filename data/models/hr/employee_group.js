/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('employee_group', {
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
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		company_id: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'employee_group'
	});
};
