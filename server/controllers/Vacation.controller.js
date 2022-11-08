const Vacation = require('../models/VacationSchema.model');

module.exports = {

    // Testing
    testing: (req, res) => {
    res.send("successfully got here");
    },

    // CREATE
    createVacation: (req, res) => {
    Vacation.create(req.body)
        .then((newVacation) => res.json(newVacation))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY [ONE]
    displayVacation: (req, res) => {
    Vacation.findOne({_id: req.params.id })
        .then((oneVacation) => res.json(oneVacation))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY ALL
    displayAllVacations: (req, res) => {
    Vacation.find({})
        .then((allVacations) => res.json(allVacations))
        .catch((err) => {
            res.json(err);
        });
    },

    // UPDATE
    updateVacation: (req, res) => {
    Vacation.findOneAndUpdate({_id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateVacation) => res.json({updateVacation}))
        .catch((err) => {
            res.json(err);
        });
    },

    // DELETE
    deleteVacation: (req, res) => {
    Vacation.findOneAndDelete({_id : req.params.id })
        .then((deletedVacation) => res.json(deletedVacation))
        .catch((err) => {
            res.json(err);
        });
    },
};