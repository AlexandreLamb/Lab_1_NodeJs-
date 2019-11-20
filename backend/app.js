const express = require('express');
const apiRouter = require('./routes/api');
const apiUnmatched = require('./middleware/api');

const app = express();

app.use('/api',apiRouter);
app.use('/',apiUnmatched);

module.exports = app;
