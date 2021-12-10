
const {sequelize, DataTypes, Model} = require('../db')

class Crew extends Model {}

Crew.init({
    crew_name: DataTypes.STRING,
    job: DataTypes.STRING,
    //movie_id: DataTypes.INTEGER
}, 
{
    sequelize,
    timestamps: false
}
)

module.exports = {Crew}