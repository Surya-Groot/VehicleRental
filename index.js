
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const orgRoute = require('./Routes/orgRoutes');
const userRoute = require('./Routes/userRoute');
const vehicleRoute = require('./Routes/vehicleRoute');
const bookinRoute = require('./Routes/bookingRoute');
const driverRoute = require('./Routes/driverRoute');
const employeRoute = require('./Routes/employeeRoute');

const cors = require('cors');
app.use(cors());


require('dotenv').config();
const port = process.env.PORT1;
app.listen(port, () => { console.log(`Server Running on ${port}`) });

const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl)
    .then(() => { console.log('DB Connected Sucessfully'); })
    .catch(() => { console.log('DB Connetion Error'); });

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// routess

app.use('/org', orgRoute);
app.use('/user', userRoute);
app.use('/vechicle', vehicleRoute);
app.use('/booking', bookinRoute);
app.use('/driver', driverRoute);
app.use('/employee', employeRoute);












