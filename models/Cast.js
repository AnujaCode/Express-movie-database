const {sequelize, DataTypes, Model} = require('../db')

class Cast extends Model {}

Cast.init(
{
    character_name: DataTypes.STRING,
    castMember_name: DataTypes.STRING,
    //movie_id: DataTypes.INTEGER
}, 
{
    sequelize,
    timestamps: false
}
)

module.exports = {Cast}