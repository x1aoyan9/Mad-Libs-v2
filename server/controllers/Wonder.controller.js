const Wonder = require('../models/WonderSchema.model');

module.exports = {

    // Testing
    testing: (req, res) => {
    res.send("successfully got here");
    },

    // CREATE
    createWonder: (req, res) => {
    Wonder.create(req.body)
        .then((newWonder) => res.json(newWonder))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY [ONE]
    displayWonder: (req, res) => {
    Wonder.findOne({_id: req.params.id })
        .then((oneWonder) => res.json(oneWonder))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY ALL
    displayAllWonders: (req, res) => {
    Wonder.find({})
        .then((allWonders) => res.json(allWonders))
        .catch((err) => {
            res.json(err);
        });
    },

    // UPDATE
    updateWonder: (req, res) => {
    Wonder.findOneAndUpdate({_id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateWonder) => res.json({updateWonder}))
        .catch((err) => {
            res.json(err);
        });
    },

    // DELETE
    deleteWonder: (req, res) => {
    Wonder.findOneAndDelete({_id : req.params.id })
        .then((deletedWonder) => res.json(deletedWonder))
        .catch((err) => {
            res.json(err);
        });
    },
};