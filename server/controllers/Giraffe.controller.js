const Giraffe = require('../models/GiraffeSchema.model');

module.exports = {

    // Testing
    testing: (req, res) => {
    res.send("successfully got here");
    },

    // CREATE
    createGiraffe: (req, res) => {
    Giraffe.create(req.body)
        .then((newGiraffe) => res.json(newGiraffe))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY [ONE]
    displayGiraffe: (req, res) => {
    Giraffe.findOne({_id: req.params.id })
        .then((oneGiraffe) => res.json(oneGiraffe))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY ALL
    displayAllGiraffes: (req, res) => {
    Giraffe.find({})
        .then((allGiraffes) => res.json(allGiraffes))
        .catch((err) => {
            res.json(err);
        });
    },

    // UPDATE
    updateGiraffe: (req, res) => {
    Giraffe.findOneAndUpdate({_id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateGiraffe) => res.json({updateGiraffe}))
        .catch((err) => {
            res.json(err);
        });
    },

    // DELETE
    deleteGiraffe: (req, res) => {
    Giraffe.findOneAndDelete({_id : req.params.id })
        .then((deletedGiraffe) => res.json(deletedGiraffe))
        .catch((err) => {
            res.json(err);
        });
    },
};