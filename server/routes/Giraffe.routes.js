const GiraffeController = require('../controllers/Giraffe.controller');

module.exports = (app) => {

    app.get('/api');

    // CREATE
    app.post('/api/giraffe/new', GiraffeController.createGiraffe);

    // DISPLAY [ONE]
    app.get('/api/giraffe/:id', GiraffeController.displayGiraffe);

    // DISPLAY ALL
    app.get('/api/giraffe', GiraffeController.displayAllGiraffes);

    // UPDATE
    app.put('/api/giraffe/:id', GiraffeController.updateGiraffe);

    // DELETE
    app.delete('/api/giraffe/:id', GiraffeController.deleteGiraffe);

};