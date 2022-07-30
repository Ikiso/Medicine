// import router from './router.js';
const router = require('./router.js');
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/', router);

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => {console.log('We are live on ' + PORT)});
    } catch (e) {
        console.log('Server Error', e. message);
        process.exit(1);
    }
}

start();

