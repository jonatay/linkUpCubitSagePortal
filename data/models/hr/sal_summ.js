/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sal_summ', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		emp_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		id_number: {
			type: DataTypes.STRING,
			allowNull: true
		},
		hired: {
			type: DataTypes.STRING,
			allowNull: true
		},
		bruto: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		bonus_mth: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		mibfa: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		taxeable_income: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		tax_inc_annual: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		paye: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		uif: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		deductions: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		pension: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		nett: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		hrs_worked: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		eti: {
			type: DataTypes.DOUBLE,
			allowNull: true
		},
		p_yr: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		p_mth: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'sal_summ'
	});
};
