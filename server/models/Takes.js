const Sequelize = require("sequelize");
const db = require("../config/database");

const Takes = db.define("Take", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    eid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    lid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    mid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    doneLesson: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
});

module.exports = Takes;