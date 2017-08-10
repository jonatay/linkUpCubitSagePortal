/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emp_ledger', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cubit_id: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		empid: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		contra: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		edate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		ref: {
			type: DataTypes.STRING,
			allowNull: true
		},
		cubit_description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		debit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		credit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		dbalance: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		cbalance: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		sdate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		div: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '0'
		},
		tax_year: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		tax_month: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		cubit_company_code: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		cacc_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		employee_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		employee_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		topacc: {
			type: DataTypes.STRING,
			allowNull: true
		},
		accnum: {
			type: DataTypes.STRING,
			allowNull: true
		},
		accname: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ledger_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'emp_ledger'
	});
};
