const Band = require('../models/BandSchema.model');

module.exports = {

    // Testing
    testing: (req, res) => {
    res.send("successfully got here");
    },

    // CREATE
    createBand: (req, res) => {
    Band.create(req.body)
        .then((newBand) => res.json(newBand))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY [ONE]
    displayBand: (req, res) => {
    Band.findOne({_id: req.params.id })
        .then((oneBand) => res.json(oneBand))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY ALL
    displayAllBands: (req, res) => {
    Band.find({})
        .then((allBands) => res.json(allBands))
        .catch((err) => {
            res.json(err);
        });
    },

    // UPDATE
    updateBand: (req, res) => {
    Band.findOneAndUpdate({_id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateBand) => res.json({updateBand}))
        .catch((err) => {
            res.json(err);
        });
    },

    // DELETE
    deleteBand: (req, res) => {
    Band.findOneAndDelete({_id : req.params.id })
        .then((deletedBand) => res.json(deletedBand))
        .catch((err) => {
            res.json(err);
        });
    },
};