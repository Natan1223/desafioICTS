const express = require('express');
const router = express.Router();
const local = require('../controller/localController');

router.get('/local', async function (req, res) {
    const listLocal = await local.getAllLocal();
    res.json(listLocal);

});

router.put('/local/:id', async function (req, res) {
    const sensor = req.body;
    await local.updateLocal(req.params.id, local);
    res.end();

});


module.exports = router;