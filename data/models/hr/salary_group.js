/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('salary_group', {
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
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'salary_group'
	});
};
