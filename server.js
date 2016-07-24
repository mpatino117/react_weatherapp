'use strict';

const express = require('express');
const app = express();


app.use(express.static('public'));

app.listen(3000, () => console.log('Express server at Port 3000 is running'));
