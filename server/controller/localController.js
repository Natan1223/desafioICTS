const localData = require('../data/localData');

exports.getAllLocal= async function () {
    const localDetalhe =  localData.getAllLocal();
    if(localDetalhe == '') {
        result = {
            menssage: 'Não exite local cadastrado!'   
        }
    }else{
        result = localDetalhe;
    }
    
    return result;
};


exports.updateLocal =  function (id, local) {
    return localData.updateLocal(id, local);
};