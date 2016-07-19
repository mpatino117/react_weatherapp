'use strict';

const express = require('express');
const app = express();
const React = require('react');
const ReactDOM = require('react-dom');

app.use(express.static('public'));

app.listen(3000, () => console.log('Express server at Port 3000 is running'));
