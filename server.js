'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {

        next();
    } else {

        res.redirect('https://', req.hostname, req.url);
    }
});

app.use(express.static('public'));

app.listen(PORT, () => console.log('Express Server At Port' + PORT + 'Is Running \n \n  Local: http://localhost:' + PORT));