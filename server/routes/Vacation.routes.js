const VacationController = require('../controllers/Vacation.controller');

module.exports = (app) => {

    app.get('/api');

    // CREATE
    app.post('/api/vacation/new', VacationController.createVacation);

    // DISPLAY [ONE]
    app.get('/api/vacation/:id', VacationController.displayVacation);

    // DISPLAY ALL
    app.get('/api/vacation', VacationController.displayAllVacations);

    // UPDATE
    app.put('/api/vacation/:id', VacationController.updateVacation);

    // DELETE
    app.delete('/api/vacation/:id', VacationController.deleteVacation);

};