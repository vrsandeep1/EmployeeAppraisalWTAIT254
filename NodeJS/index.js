const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./models/db.js');
const employeeController = require('./controllers/employeeController.js');
const passport = require('passport');
const rtsIndex = require('./routes/index.router');
require('./config/passportConfig');

var app = express();
app.use(bodyParser.json()); 
app.use(cors({origin:'http://localhost:4200'}));
app.use(passport.initialize());
 

app.use('/api',rtsIndex);
app.use('/employees',employeeController);


app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.listen(3000,() => console.log('Server started at port : 3000'));

 