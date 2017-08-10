/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('salpaid', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		cubit_company_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		employee_code: {
			type: DataTypes.STRING,
			allowNull: true
		},
		empnum: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		month: {
			type: DataTypes.STRING,
			allowNull: true
		},
		bankid: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		salary: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		comm: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		uifperc: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		uif: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		payeperc: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		paye: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		totded: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		totben: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		totallow: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		loanins: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		div: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		showex: {
			type: DataTypes.STRING,
			allowNull: true
		},
		display: {
			type: DataTypes.STRING,
			allowNull: true
		},
		saldate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		week: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '0'
		},
		totded_employer: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		cyear: {
			type: DataTypes.STRING,
			allowNull: true
		},
		true_ids: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '0'
		},
		hovert: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		novert: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		taxed_sal: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		tot_fringe: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		hours: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		salrate: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		},
		bonus: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'salpaid'
	});
};
