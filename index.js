const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const app = express();


app.get('/', (req, res) => {
    res.status(200).send('Home')
})


app.listen(process.env.PORT, (req, res) => {
    console.log(`App listening on port ${process.env.PORT}...`)
});