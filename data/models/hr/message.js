/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('message', {
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
		message: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'message'
	});
};
