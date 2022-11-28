const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

app.use(cors());
app.use(express.json());

const UserRouter = require('./routes/User');

app.use('/User', UserRouter)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

//export server for testing
module.exports = app;