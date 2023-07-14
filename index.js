const express = require('express');
const cors = require('cors');
const colors = require('colors')
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

// rest object 
const app = express();

// app middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// mongodb connection
connectDB();

// testing for route work or not
app.use('/api/v1/test', require('./routes/testRoute'))

// auth route
app.use('/api/v1/auth', require('./routes/authRoute'))

// inventory route
app.use('/api/v1/inventory', require('./routes/inventoryRoute'))

// analylitcs route
app.use('/api/v1/analytics', require('./routes/analyticsRoute'))

//admin routes
app.use('/api/v1/admin', require('./routes/adminRoute'))


// server port
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server running successfully ${process.env.DEV_MODE} mode on ${process.env.PORT}`.bgWhite.green);
})