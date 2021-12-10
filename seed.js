const { sequelize } = require("./db");
const { Movie, Crew, Cast } = require("./models");

const seedMovie = [
    {
        movie_name: "Frozen",
        director_name:"Chris Buck",
        release_year: 2013
    },
    {
        movie_name: "Luca",
        director_name:"Enrico Casarosa",
        release_year:2021
    }
]

const seedCrew = [
    {
        crew_name: "Animation Department",
        job:"responsible for creating a series of frames"
    },
    {
        crew_name: "Sound Department",
        job:"responsible for getting the best on-set sound possible"
    }
]

const seedCast = [
    {
        character_name: "Anna",
        castMember_name: "Kristen Bell"
    },
    {
        character_name: "Luca Paguro",
        castMember_name: "Jacob Tremblay"
    }
]

const seed = async () => {
    try {
      await sequelize.sync({ force: true });
      await Movie.bulkCreate(seedMovie, { validate: true });
      await Crew.bulkCreate(seedCrew, { validate: true });
      await Cast.bulkCreate(seedCast, { validate: true });
      console.log("Seeding success!");
      sequelize.close();
    } catch (error) {
      console.log("SOMETHING WENT WRONG WITH THE SEEDING: ", error);
    }
  };
  
  seed()
    .then(() => {
      console.log("Seeding success!");
    })
    .catch((err) => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
    });