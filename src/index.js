const express = require("express");

const { register,login } = require("./controllers/auth.controller");
const movieController = require("./controllers/movie.controller");
const theatreController = require("./controllers/theatre.controller");
const screenController = require("./controllers/screen.controller");
const showController = require("./controllers/show.controller");
const seatController = require("./controllers/seat.controller");

const app = express();

app.use(express.json());


app.post("/register", register);

app.post("/login", login);

app.use("/movie", movieController);
app.use("/theatre", theatreController);
app.use("/screen", screenController);
app.use("/show", showController);
app.use("/seat", seatController);

module.exports = app;


// alhassan069/movieBackend