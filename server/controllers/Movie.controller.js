const Movie = require('../models/MovieSchema.model');

module.exports = {

    // Testing
    testing: (req, res) => {
    res.send("successfully got here");
    },

    // CREATE
    createMovie: (req, res) => {
    Movie.create(req.body)
        .then((newMovie) => res.json(newMovie))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY [ONE]
    displayMovie: (req, res) => {
    Movie.findOne({_id: req.params.id })
        .then((oneMovie) => res.json(oneMovie))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY ALL
    displayAllMovies: (req, res) => {
    Movie.find({})
        .then((allMovies) => res.json(allMovies))
        .catch((err) => {
            res.json(err);
        });
    },

    // UPDATE
    updateMovie: (req, res) => {
    Movie.findOneAndUpdate({_id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateMovie) => res.json({updateMovie}))
        .catch((err) => {
            res.json(err);
        });
    },

    // DELETE
    deleteMovie: (req, res) => {
    Movie.findOneAndDelete({_id : req.params.id })
        .then((deletedMovie) => res.json(deletedMovie))
        .catch((err) => {
            res.json(err);
        });
    },
};