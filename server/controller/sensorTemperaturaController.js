const sensorTemperaturaData = require('../data/sensorTemperaturaData');

exports.getAllSensorTemperatura = async function () {
    const sensorDetalhe = await sensorTemperaturaData.getAllSensorTemperatura();
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

exports.getSensorTemperatura = async function (id) {
    const sensorDetalhe = await sensorTemperaturaData.getSensorTemperatura(id);
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

exports.updateSensorTemperatura =  function (id, sensor) {
    return sensorTemperaturaData.updateSensorTemperatura(id, sensor);
};