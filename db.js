const {Sequelize , DataTypes, Model} = require('sequelize')
const path = require("path");


//create a database named 'sequelize'
//we will add models to this db in index
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite', //type of SQL,
    storage: path.join(__dirname, "./db.sqlite"), //file location for db
    logging: false
})

module.exports = {sequelize, DataTypes, Model};

