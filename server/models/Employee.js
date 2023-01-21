const Sequelize = require("sequelize");
const db = require("../config/database");

const Employee = db.define("Employee", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    enrollDate: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Employee;