require('dotenv').config();

const config = {
    port: process.env.APP_PORT || 3000
};

module.exports = config;