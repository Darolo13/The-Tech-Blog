const userSeed = require('./user-seeds');
const postSeed = require('./post-seeds');

const sequelize = require('../config/connection');

const completeSeed = async() => {
    await sequelize.sync({ force: true });
    await userSeed();
    await postSeed();
    process.exit(0);
};

completeSeed();