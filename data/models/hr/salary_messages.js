/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('salary_messages', {
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
		text: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		sql: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'salary_messages'
	});
};
