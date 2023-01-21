const Sequelize = require("sequelize");
const db = require("../config/database");

const Lesson = db.define("Lesson", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    mid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    question: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    answer: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Lesson;