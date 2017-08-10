/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('leave_type', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'leave_type'
	});
};
