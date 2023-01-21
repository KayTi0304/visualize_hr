const Sequelize = require("sequelize");
const db = require("../config/database");

const Offers = db.define("Offer", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    mid: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Offers;