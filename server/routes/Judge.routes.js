const JudgeController = require('../controllers/Judge.controller');

module.exports = (app) => {

    app.get('/api');

    // CREATE
    app.post('/api/judge/new', JudgeController.createJudge);

    // DISPLAY [ONE]
    app.get('/api/judge/:id', JudgeController.displayJudge);

    // DISPLAY ALL
    app.get('/api/judge', JudgeController.displayAllJudges);

    // UPDATE
    app.put('/api/judge/:id', JudgeController.updateJudge);

    // DELETE
    app.delete('/api/judge/:id', JudgeController.deleteJudge);

};