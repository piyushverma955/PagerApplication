const dbConfig = require("../config");
const Sequelize = require("sequelize");
const db = {};

try {
    const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.team = require("./team")(sequelize, Sequelize);
    db.developer = require("./developer")(sequelize, Sequelize);
} catch (e) {
    console.log(e.message);
    process.exit(0);
}

module.exports = db;