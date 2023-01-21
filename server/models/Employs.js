const Sequelize = require("sequelize");
const db = require("../config/database");

const Employs = db.define("Employ", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    eid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    doneEnroll: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
});

module.exports = Employs;