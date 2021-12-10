const {sequelize} = require("./db");
const {Movie, Cast, Crew} = require("./models")

describe('Movie Database', () => {
	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

describe('Movie Model', () => {
//create instances of Movie Model for testing
    test('Movie has a movieName, directorName and release-year', async () => {
       //read test instance from db
        const newMovie = await Movie.create({movie_name: "Frozen",director_name: "Chris Buck",release_year: 2013})
       //const testMovie = new Movie("Frozen") 
        expect(newMovie.movie_name).toBe('Frozen'),
        expect(newMovie.director_name).toBe('Chris Buck')
        expect(newMovie.release_year).toBe(2013)
    })
})

describe('Cast Model', () => {

    test('Cast has character-name ', async () => {
        const newCast = await Cast.create({character_name: "Anna",castMember_name:"Kristen Bell"})
        expect(newCast.character_name).toBe('Anna'),
        expect(newCast.castMember_name).toBe('Kristen Bell')
    })
})

describe('Crew Model', () => {

    test('crew member has crewName and job ', async () => {
        const newCrew = await Crew.create({crew_name: "Animation Department", job: "responsible for creating a series of frames"})
        expect(newCrew.crew_name).toBe("Animation Department"),
        expect(newCrew.job).toBe("responsible for creating a series of frames")
    })
}) 
describe("Movie associations", () => {
test('Movie can have many casts', async()=> {
    //read test waiter instance from db
    const testMovie = await Movie.findOne({where: {movie_name: 'Frozen'}});
    //create  test instances 
    const testCast = await Cast.findOne({where: {character_name: 'Anna'}})
    // sequelize add method
    await testMovie.addCast(testCast)
    //retrieve list of Customers with the waiters
    const castList = await testMovie.getCasts()
    //assert that the list of customer is length 1
    expect(castList.length).toBe(1)
    //assert that the 0th index of the array customerlist is an instance of the model Customer
    expect(castList[0] instanceof Cast).toBeTruthy()
    expect(castList[0].character_name).toMatch('Anna')

})

//test association crew to movie
test('movies can have many crew', async()=> {
    const testMovie = await Movie.findOne({where: {movie_name: 'Frozen'}});
    const testCrew = await Crew.findOne({where: {crew_name: "Animation Department"}})
    await testMovie.addCrew(testCrew)
    const crewList = await testMovie.getCrews()
    expect(crewList.length).toBe(1)
    expect(crewList[0] instanceof Crew).toBeTruthy()
    expect(crewList[0].crew_name).toMatch("Animation Department")
})
})


    afterAll(async()=> {
        // await sequelize.sync({force:true})
        sequelize.close()
    })

})


