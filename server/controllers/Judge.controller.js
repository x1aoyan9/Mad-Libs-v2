const Judge = require('../models/JudgeSchema.model');

module.exports = {

    // Testing
    testing: (req, res) => {
    res.send("successfully got here");
    },

    // CREATE
    createJudge: (req, res) => {
    Judge.create(req.body)
        .then((newJudge) => res.json(newJudge))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY [ONE]
    displayJudge: (req, res) => {
    Judge.findOne({_id: req.params.id })
        .then((oneJudge) => res.json(oneJudge))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY ALL
    displayAllJudges: (req, res) => {
    Judge.find({})
        .then((allJudges) => res.json(allJudges))
        .catch((err) => {
            res.json(err);
        });
    },

    // UPDATE
    updateJudge: (req, res) => {
    Judge.findOneAndUpdate({_id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateJudge) => res.json({updateJudge}))
        .catch((err) => {
            res.json(err);
        });
    },

    // DELETE
    deleteJudge: (req, res) => {
    Judge.findOneAndDelete({_id : req.params.id })
        .then((deletedJudge) => res.json(deletedJudge))
        .catch((err) => {
            res.json(err);
        });
    },
};