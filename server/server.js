const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./route/sensorTemperaturaRouter'));
app.use('/', require('./route/sensorConsumoEnergiaRouter'));
app.use('/', require('./route/localRouter'));

app.listen(3000);