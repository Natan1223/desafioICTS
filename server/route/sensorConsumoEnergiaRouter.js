const express = require('express');
const router = express.Router();
const SensorConsumoEnergia = require('../controller/SensorConsumoEnergiaController');

router.get('/sensor-consumo-energia', async function (req, res) {
    const listSensorConsumoEnergia = await SensorConsumoEnergia.getAllSensorConsumoEnergia();
    res.json(listSensorConsumoEnergia);
});

router.get('/sensor-consumo-energia/:id', async function (req, res) {
    const id = req.params.id
    const listSensorConsumoEnergia = await SensorConsumoEnergia.getSensorConsumoEnergia(id);
    res.json(listSensorConsumoEnergia);
});

router.get('/sensor-maior-consumo-energia', async function (req, res) {
    const listSensorConsumoEnergia = await SensorConsumoEnergia.getSensorConsumoKwhEnergia();
    res.json(listSensorConsumoEnergia);
});

router.get('/sensor-maior-consumo-energia-periodo/', async function (req, res) {
    const periodo = req.query
    const listSensorConsumoEnergia = await SensorConsumoEnergia.getSensorConsumoKwhEnergiaPeriodo(periodo);
    res.json(listSensorConsumoEnergia);
});

router.put('/sensor-consumo-energia/:id', async function (req, res) {
    const sensor = req.body;
    await SensorConsumoEnergia.updateSensorConsumoEnergia(req.params.id, sensor);
    res.end();

});


module.exports = router;