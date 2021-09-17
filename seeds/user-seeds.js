const { User } = require('../models');

const userInfo = [
    {
        username: 'Darwin',
        password: 'password'
    },
    {
        username: 'Joseph',
        password: 'password'
    },
    {
        username: 'Michael',
        password: 'password'
    },
    {
        username: 'Trevor',
        password: 'password'
    },
    {
        username: 'Marshall',
        password: 'password'
    }
];

const userSeed = () => User.bulkCreate(userInfo);

module.exports = userSeed;