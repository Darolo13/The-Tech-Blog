const userSeed = require('./user-seeds');

const sequelize = require('../config/connection');

const completeSeed = async() => {
    await sequelize.sync({ force: true });
    await userSeed();
    process.exit(0);
};

completeSeed();