const express = require('express');
const app = express();
const morgan = require('morgan');
const globalErrorHandler = require('./controllers/errorController.js');
const resourcesRoutes = require('./routes/resourcesRoutes.js');
const acadmicadvisorRoutes = require('./routes/academicadvisorRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
// MIDDLEWARES

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//   console.log('hello from the middle ware...');
//   next();
// });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes

app.use('/', resourcesRoutes);
app.use('/user', userRoutes);
// app.use('/staff', staffRoutes);
// app.use('/E-ACADEMICADVISOR', acadmicadvisorRoutes);



module.exports = app;

