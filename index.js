const express = require('express');
const mongoose = require('mongoose');
const { router } = require('./controllers/admin/router');
const API_PORT = 3001;
const app = express();

app.use("/api", router);

app.listen(API_PORT, () => console.log('Server is running'));




