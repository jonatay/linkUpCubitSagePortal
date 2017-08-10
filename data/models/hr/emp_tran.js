/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_tran', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		tran_type_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		tran_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
		employee_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		tran_ref: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cap_user: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cap_date: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'emp_tran'
	});
};
