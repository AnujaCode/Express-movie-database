const express = require('express');
const req = require('express/lib/request');
const { Movie, Crew, Cast } = require('./models')
const app = express()
const port = 3000

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//  CRUD routes for Movie modal 
app.get("/Movie", async (req, res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})

app.get("/Movie/:id", async (req, res) => {
    const moviesById = await Movie.findByPk(req.params.id)
    res.json(moviesById)
})

app.post("/Movie", async (req, res) => {
    await Movie.create(req.body)
    res.send("New movie has been added to the database!")
    console.log("New movie has been added to the database!")
})

app.put("/Movie/:id", async (req, res) => {
    await Movie.update(req.body, {
        where : {id : req.params.id}
    })
    res.send("Thanks for updating Movie!")
    console.log("Thanks for updating movie!")
})

app.delete('/Movie/:id', async (req, res) => {
    await Movie.destroy(
        {where : {id : req.params.id}}
    )
    res.send("Movie has been deleted")
    console.log("Movie has been deleted")
})

// CRUD routes for Crew Modal
app.get("/Crew", async (req, res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
})

app.get("/Crew/:id", async (req, res) => {
    const crewById = await Crew.findByPk(req.params.id)
    res.json(crewById)
})

app.post("/Crew", async (req, res) => {
    await Crew.create(req.body)
    res.send("New crew has been added!")
    console.log("New crew has been added!")
})

app.put("/Crew/:id", async (req, res) => {
    await Crew.update(req.body, {
        where : {id : req.params.id}
    })
    res.send("Thanks for updating this Crew!")
    console.log("Thanks for updating this Crew!")
})

app.delete('/Crew/:id', async (req, res) => {
    await Crew.destroy(
        {where : {id : req.params.id}}
    )
    res.send("Crew has been deleted")
    console.log("Crew has been deleted")
})

// CRUD routes for Cast Modal 
app.get("/Cast", async (req, res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})

app.get("/Cast/:id", async (req, res) => {
    const castById = await Cast.findByPk(req.params.id)
    res.json(castById)
})

app.post("/Cast", async (req, res) => {
    await Cast.create(req.body)
    res.send("New cast has been added to the database!")
    console.log("New cast has been added to the database!")
})

app.put("/Cast/:id", async (req, res) => {
    await Cast.update(req.body, {
        where : {id : req.params.id}
    })
    res.send("Thanks for updating this Cast!")
    console.log("Thanks for updating this Cast!")
})

app.delete('/Cast/:id', async (req, res) => {
    await Cast.destroy(
        {where : {id : req.params.id}}
    )
    res.send("Cast has been deleted")
    console.log("Cast has been deleted")
})

app.listen(port, () => {console.log(`Server listening at http://localhost:${port}`)})