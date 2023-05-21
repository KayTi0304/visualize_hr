const Sequelize = require("sequelize");

const databaseURL =
    "postgresql://ti:WD2ep8apXqYOG-PTBrbQoQ@ornery-ibex-4660.6wr.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full";

//const databaseURL =
//    "postgresql://mti:qGpbyTVrUG9rAz6DQlhCBQ@amazed-ostrich-6974.5xj.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full";

const db = new Sequelize(databaseURL);

module.exports = db;