/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nature_person: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    first_names: {
      type: DataTypes.STRING,
      allowNull: true
    },
    known_as: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    initials: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    employee_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    employee_cc_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.TIME,
      allowNull: true
    },
    empnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    employee_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    company_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hire_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    leave_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    salary: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    salary_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    psira_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_shift_worker: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    psira_grade: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tax_reference_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_home: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_postal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    passport_nbr: {
      type: DataTypes.STRING,
      allowNull: true
    },
    passport_country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    race: {
      type: DataTypes.STRING,
      allowNull: true
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sdept: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sbranch: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'employee'
  });
};
