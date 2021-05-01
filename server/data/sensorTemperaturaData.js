const database = require('../db/conexao');

exports.getAllSensorTemperatura = function () {
    return database.query("select s.*, l.nome as nomelocal, l.descricao as descricaolocal from sensores.sensor s join sensores.local l on s.id_local = l.id where s.tipo_sensor = 'T'");
};

exports.getSensorTemperatura = function (id) {
    return database.query("select s.*, l.nome as nomelocal, l.descricao as descricaolocal from sensores.sensor s join sensores.local l on s.id_local = l.id where s.tipo_sensor = 'T' and s.id = $1", [id]);
};

exports.updateSensorTemperatura= function (id, sensor) {
	return database.none('update sensores.sensor set nome = $1, descricao = $2, id_local = $3 where id = $4', [sensor.nome, sensor.descricao, sensor.local.id, id]);
};
