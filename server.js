require('./db/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const egyptController = require('./controllers/egyptController');
const port = 3000;


app.use(morgan('short'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/egypt', egyptController);
app.use(express.static('public'));


app.listen(port, ()=>{
    console.log(`Server connected to ${port}`);
})
