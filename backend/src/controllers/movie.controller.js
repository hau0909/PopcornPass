const movieService = require("../services/movie.services");

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get movie by id
const getMovieById = async (req, res) => {
    try {
        const movie = await movieService.getMovieById(req.params.id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllMovies,
    getMovieById
};
