const express = require("express");
const { getAllMovies, getMovieById } = require("../../controllers/movie.controller");
const router = express.Router();

//get all movies
router.get("/", getAllMovies);

//get movie by id
router.get("/:id", getMovieById);

module.exports = router;
