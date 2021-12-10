//const { Cast } = require('sequelize/dist/lib/utils')
const {sequelize, DataTypes, Model} = require('../db')
//import models
const { Crew } = require('./Crew')
const { Cast } = require('./Cast')
const { Movie } = require('./Movie')

//associate models
//adds foreign key to Crew and Cast tables connecting to instance of a specific Movie
Crew.belongsTo(Movie)
Cast.belongsTo(Movie)

//gives us sequelize methods for a one to many relationship
Movie.hasMany(Crew)
Movie.hasMany(Cast)

//export models with added associations
module.exports = {Crew, Cast,Movie, sequelize}

