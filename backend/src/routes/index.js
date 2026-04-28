module.exports = (app) => {

  // feat(auth): signup & signin
  app.use("/api/auth", require("./api/auth.routes"));

  // feat(movie): get all movies & get movie by id
  app.use("/api/movie", require("./api/movie.routes"));
};
