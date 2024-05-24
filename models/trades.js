// Uncomment the code below to use Sequelize ORM
const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
// const mongoose = require('mongoose');


// Insert your model definition below
const Trades = sequelize.define('Trade', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.ENUM('buy', 'sell'),
        allowNull: false,
        validate: {
            isIn: [['buy', 'sell']]
        }
    },
    user_id: Sequelize.INTEGER,
    symbol: Sequelize.STRING,
    shares: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 100
        }
    },
    price: Sequelize.INTEGER,
    timestamp: Sequelize.INTEGER
}, {
    timestamps: false
});

module.exports = Trades;