const MagicController = require('../controllers/Magic.controller');

module.exports = (app) => {

    app.get('/api');

    // CREATE
    app.post('/api/magic/new', MagicController.createMagic);

    // DISPLAY [ONE]
    app.get('/api/magic/:id', MagicController.displayMagic);

    // DISPLAY ALL
    app.get('/api/magic', MagicController.displayAllMagics);

    // UPDATE
    app.put('/api/magic/:id', MagicController.updateMagic);

    // DELETE
    app.delete('/api/magic/:id', MagicController.deleteMagic);

};