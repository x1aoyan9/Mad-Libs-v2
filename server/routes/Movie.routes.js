const MovieController = require('../controllers/Movie.controller');

module.exports = (app) => {

    app.get('/api');

    // CREATE
    app.post('/api/movie/new', MovieController.createMovie);

    // DISPLAY [ONE]
    app.get('/api/movie/:id', MovieController.displayMovie);

    // DISPLAY ALL
    app.get('/api/movie', MovieController.displayAllMovies);

    // UPDATE
    app.put('/api/movie/:id', MovieController.updateMovie);

    // DELETE
    app.delete('/api/movie/:id', MovieController.deleteMovie);

};