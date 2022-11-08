const BandController = require('../controllers/Band.controller');

module.exports = (app) => {

    app.get('/api');

    // CREATE
    app.post('/api/band/new', BandController.createBand);

    // DISPLAY [ONE]
    app.get('/api/band/:id', BandController.displayBand);

    // DISPLAY ALL
    app.get('/api/band', BandController.displayAllBands);

    // UPDATE
    app.put('/api/band/:id', BandController.updateBand);

    // DELETE
    app.delete('/api/band/:id', BandController.deleteBand);

};