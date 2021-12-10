const {sequelize, DataTypes, Model} = require('../db')

class Movie extends Model {}

Movie.init({
    movie_name: DataTypes.STRING,
    director_name: DataTypes.STRING,
    release_year: DataTypes.INTEGER
}, 
{
    sequelize,
    timestamps: false
}
)

module.exports = {Movie}