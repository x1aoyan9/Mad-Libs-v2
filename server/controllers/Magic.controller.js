const Magic = require('../models/MagicSchema.model');

module.exports = {

    // Testing
    testing: (req, res) => {
    res.send("successfully got here");
    },

    // CREATE
    createMagic: (req, res) => {
    Magic.create(req.body)
        .then((newMagic) => res.json(newMagic))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY [ONE]
    displayMagic: (req, res) => {
    Magic.findOne({_id: req.params.id })
        .then((oneMagic) => res.json(oneMagic))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY ALL
    displayAllMagics: (req, res) => {
    Magic.find({})
        .then((allMagics) => res.json(allMagics))
        .catch((err) => {
            res.json(err);
        });
    },

    // UPDATE
    updateMagic: (req, res) => {
    Magic.findOneAndUpdate({_id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateMagic) => res.json({updateMagic}))
        .catch((err) => {
            res.json(err);
        });
    },

    // DELETE
    deleteMagic: (req, res) => {
    Magic.findOneAndDelete({_id : req.params.id })
        .then((deletedMagic) => res.json(deletedMagic))
        .catch((err) => {
            res.json(err);
        });
    },
};