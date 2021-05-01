const database = require('../db/conexao');

exports.getAllSensorConsumoEnergia = function () {
    return database.query("select s.*, l.nome as nomelocal, l.descricao as descricaolocal from sensores.sensor s join sensores.local l on s.id_local = l.id  where s.tipo_sensor = 'E'");
};

exports.getSensorConsumoEnergia = function (id) {
    return database.query("select s.*, l.nome as nomelocal, l.descricao as descricaolocal from sensores.sensor s join sensores.local l on s.id_local = l.id  where s.tipo_sensor = 'E' and s.id = $1", [id]);
};

exports.getSensorConsumoKwhEnergia = function () {
    return database.query("select s.id, s.nome, s.descricao, s.data_hora_cadastro, s.id_local, l.nome as nomelocal, l.descricao as descricaolocal, sum(ce.cosumo) || ' ' || 'Kwh' AS consumo from sensores.consumo_energia ce join sensores.sensor s ON ce.id_sensor = s.id join sensores.local l on s.id_local = l.id GROUP BY s.id, s.nome, s.descricao, s.data_hora_cadastro, s.id_local, nomelocal, descricaolocal ORDER BY consumo DESC LIMIT 1");
};

exports.getSensorConsumoKwhEnergiaPeriodo = function (periodo) {
    return database.query("select s.id, s.nome, s.descricao, s.data_hora_cadastro, s.id_local, l.nome as nomelocal, l.descricao as descricaolocal, sum(ce.cosumo) || ' ' || 'Kwh' AS consumo from sensores.consumo_energia ce join sensores.sensor s ON ce.id_sensor = s.id join sensores.local l on s.id_local = l.id where ce.data_hora_cadastro BETWEEN  $1 AND $2 GROUP BY s.id, s.nome, s.descricao, s.data_hora_cadastro, s.id_local, nomelocal, descricaolocal ORDER BY consumo DESC LIMIT 1", [periodo.dataInicio, periodo.dataFim]);
};

exports.updateSensorConsumoEnergia= function (id, sensor) {
	return database.none('update sensores.sensor set nome = $1, descricao = $2 where id = $3', [sensor.nome, sensor.descricao, id]);
};
