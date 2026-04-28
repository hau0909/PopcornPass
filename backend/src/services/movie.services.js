const Movie = require("../models/Movie.model");

//Get all movies
const getAllMovies = async () => {
    const movies = await Movie.find();
    return movies;
};

//Get movies by id 
const getMovieById = async (id) => {
    const movie = await Movie.findById(id);
    if (!movie) {
        throw new Error("Movie not found");
    }
    return movie;
};

module.exports = {
    getAllMovies,
    getMovieById
};
