const sensorConsumoEnergiaData = require('../data/sensorConsumoEnergiaData');

exports.getAllSensorConsumoEnergia = async function () {
    const sensorDetalhe = await sensorConsumoEnergiaData.getAllSensorConsumoEnergia();

    if(sensorDetalhe == '') {
        result = {
            menssage: 'Não exite sensores cadastrado!'   
        }
    }else{
        var result = sensorDetalhe.map( function(item) {

            var detalhe = { 
                id : item.id,
                nome: item.nome,
                descricao: item.descricao,
                local : {
                    id: item.id_local, 
                    nome: item.nomelocal, 
                    descricao: item.descricaolocal
                }
            }
            return detalhe;
        });
    }

    return result;
};

exports.getSensorConsumoEnergia = async function (id) {
    const sensorDetalhe = await sensorConsumoEnergiaData.getSensorConsumoEnergia(id);

    if(sensorDetalhe == '') {
        result = {
            menssage: 'Não exite sensor cadastrado com esse id '+ id 
        }
    }else{
        var result = sensorDetalhe.map( function(item) {

            var detalhe = { 
                id : item.id,
                nome: item.nome,
                descricao: item.descricao,
                local : {
                    id: item.id_local, 
                    nome: item.nomelocal, 
                    descricao: item.descricaolocal
                }
            }
            return detalhe;
        });
    }

    return result;
};

exports.getSensorConsumoKwhEnergia = async function () {
    const sensorDetalhe = await sensorConsumoEnergiaData.getSensorConsumoKwhEnergia();

    if(sensorDetalhe == '') {
        result = {
            menssage: 'Não exite sensores cadastrado!'   
        }
    }else{
        var result = sensorDetalhe.map( function(item) {

            var detalhe = { 
                id : item.id,
                nome: item.nome,
                descricao: item.descricao,
                consumo: item.consumo,
                local : {
                    id: item.id_local, 
                    nome: item.nomelocal, 
                    descricao: item.descricaolocal
                }
            }
            return detalhe;
        });
    }

    return result;
};

exports.getSensorConsumoKwhEnergiaPeriodo = async function (periodo) {
    const sensorDetalhe = await sensorConsumoEnergiaData.getSensorConsumoKwhEnergiaPeriodo(periodo);

    if(sensorDetalhe == '') {
        result = {
            menssage: 'Não exite sensores cadastrado!'   
        }
    }else{
        var result = sensorDetalhe.map( function(item) {

            var detalhe = { 
                id : item.id,
                nome: item.nome,
                descricao: item.descricao,
                consumo: item.consumo,
                local : {
                    id: item.id_local, 
                    nome: item.nomelocal, 
                    descricao: item.descricaolocal
                }
            }
            return detalhe;
        });
    }

    return result;
};

exports.updateSensorConsumoEnergia =  function (id, sensor) {
    return sensorConsumoEnergiaData.updateSensorConsumoEnergia(id, sensor);
};