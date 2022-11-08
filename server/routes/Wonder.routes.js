const WonderController = require('../controllers/Wonder.controller');

module.exports = (app) => {

    app.get('/api');

    // CREATE
    app.post('/api/wonder/new', WonderController.createWonder);

    // DISPLAY [ONE]
    app.get('/api/wonder/:id', WonderController.displayWonder);

    // DISPLAY ALL
    app.get('/api/wonder', WonderController.displayAllWonders);

    // UPDATE
    app.put('/api/wonder/:id', WonderController.updateWonder);

    // DELETE
    app.delete('/api/wonder/:id', WonderController.deleteWonder);

};