
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path =require('path');
const orgRoute = require('./Routes/orgRoutes');
const session = require('express-session');
const gRoute = require('./Routes/googleRoute');
const passport = require('passport');
const userRoute = require('./Routes/userRoute');
const vehicleRoute = require('./Routes/vehicleRoute');
const bookinRoute = require('./Routes/bookingRoute');
require('./Utils/googleAuth'); 

const cors = require('cors');
app.use(cors());

// app.use(session({ 
//     secret: 'your_secret_key', 
//     resave: false,
//     saveUninitialized: true 
// }));

// app.use(passport.initialize());
// app.use(passport.session());


require('dotenv').config();
const port = process.env.PORT1;
app.listen(port, () => { console.log(`Server Running on ${port}`) });

const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl)
.then(()=>{console.log('DB Connected Sucessfully');})
.catch(()=>{console.log('DB Connetion Error');});

app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// routess

// app.use('/',gRoute); 
app.use('/org',orgRoute);
app.use('/user',userRoute);
app.use('/vechicle',vehicleRoute);
app.use('/booking',bookinRoute);










