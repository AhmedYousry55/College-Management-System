const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const compression = require('compression');
const globalErrorHandler = require('./controllers/errorController.js');
const acadmicadvisorRoutes = require('./routes/academicadvisorRoutes.js');
const adviserRoutes = require('./routes/adviserRoutes.js');
const AttendanceRoutes = require('./routes/attendanceRoutes.js');
const coursesRoutes = require('./routes/coureseRoutes.js');
// const studentRoutes = require('./routes/studentRoutes.js');
// const coursesPreqs = require('./routes/coursesPreqsRoutes.js');
const dashboardRoutes = require('./routes/dashboardRoutes.js');
const gradesRoutes = require('./routes/gradesRoutes.js');
const lecturesRoutes = require('./routes/lecturesRoutes.js') ;
const scheduleRoutes = require('./routes/scheduleRoutes.js');
// const degreePreqsRoutes = require('./routes/degreePreqsRoutes.js');
const sectionsRoutes = require('./routes/sectionsRoutes.js');
const staffRoutes = require('./routes/staffRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');
const assignmentsRouter = require('./routes/assignmentsRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
// MIDDLEWARES
const app = express();

app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


app.use(morgan('dev'));


app.use(express.json());

app.use(express.static(`${__dirname}/public`));

// app.use(compression());



// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/sections',sectionsRoutes );
app.use('/api/v1/attendance', AttendanceRoutes);
app.use('/api/v1/courses', coursesRoutes);
app.use('/api/v1/Dashboard', dashboardRoutes);
app.use('/api/v1/grades', gradesRoutes);
app.use('/api/v1/lectures', lecturesRoutes);
app.use('/Assignments',assignmentsRouter);
app.use('/api/v1/advisers', adviserRoutes);
app.use('/api/v1/students', studentRoutes);
// app.use('/api/v1/coursepre', coursesPreqs);
// app.use('/api/v1/degreepreq', degreePreqsRoutes);
// app.use('/api/v1/schedules',scheduleRoutes );
// app.use('/E-ACADEMICADVISOR', acadmicadvisorRoutes);
// app.use('/api/v1/students', studentRoutes);
// app.use('/api/v1/staffs', staffRoutes);
// app.use('/api/v1/student-profile', studentProfileRoutes);



app.use(globalErrorHandler);



module.exports = app;

