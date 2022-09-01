// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');

const app = express();

// view engine setup


// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const methodOverride = require('method-override')
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'))




const indexRouter = require('./routes/index');
const empleadoRouter = require('./routes/empleado');
app.use('/', indexRouter);
app.use('/employed', empleadoRouter);


app.listen("1234",()=>console.log("Sever running in port 1234"))

module.exports = app;
