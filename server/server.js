const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');

require('./routes/Band.routes')(app);
require('./routes/Giraffe.routes')(app);
require('./routes/Judge.routes')(app);
require('./routes/Magic.routes')(app);
require('./routes/Movie.routes')(app);
require('./routes/Vacation.routes')(app);
require('./routes/Wonder.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );