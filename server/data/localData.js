const database = require('../db/conexao');

exports.getAllLocal = function () {
    return database.query("select * from sensores.local");
};

exports.updateLocal= function (id, local) {
	return database.none('update sensores.local set nome = $1, descricao = $2 where id = $3', [local.nome, local.descricao, id]);
};
