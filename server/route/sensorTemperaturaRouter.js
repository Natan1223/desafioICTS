const express = require('express');
const router = express.Router();
const sensorTemperatura = require('../controller/sensorTemperaturaController');

router.get('/sensor-temperatura', async function (req, res) {
    const listSensorTemperatura = await sensorTemperatura.getAllSensorTemperatura();
    res.json(listSensorTemperatura);
});

router.get('/sensor-temperatura/:id', async function (req, res) {
    const id = req.params.id

    const listSensorTemperatura = await sensorTemperatura.getSensorTemperatura(id);
    if(listSensorTemperatura == '') {
        res.json({
            menssage: 'Não exite sensor cadastrado com este id '+ id
        });    
    }else{
        res.json(listSensorTemperatura);
    }
});

router.put('/sensor/:id', async function (req, res) {
    const sensor = req.body;
    await sensorTemperatura.updateSensorTemperatura(req.params.id, sensor);
    res.end();

});


module.exports = router;