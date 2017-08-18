const _ = require ('underscore')
const requestPromise = require('request-promise');
module.exports = function(app)
{
    const CONST_URI_BASE = app.enuns.dados.CONST_URI_BASE + "atendimentos";

    async function getAll(req, res){
        validarRequisicao(req);
        return await obterRegistros(req.query.token);
    }
    
    async function get(req, res){
        validarRequisicao(req);        
        return await obterRegistrosPorId(req.params.id, req.query.token);                        
    }

    async function add(req, res){
        validarRequisicao(req);        
        return await addRegistro(req.body, req.query.token);                
    }

    async function save(req, res){
        validarRequisicao(req);
        return await saveRegistro(req.body, req.query.token);                        
    }
    
    function validarRequisicao(req){
        if(!req.query || !req.query.token) throw new Error("Token é um parametro obrigatório");
    }

    async function obterRegistros(dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function obterRegistrosPorId(id, dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}/${id}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function addRegistro(dadosRegistro, dadosToken){
        return  await requestPromise({
            method: 'POST',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
            body:dadosRegistro
        });
    } 

    async function saveRegistro(dadosRegistro, dadosToken){
        return  await requestPromise({
            method: 'PUT',
            uri: `${CONST_URI_BASE}?token=${dadosToken}`,
            json: true,
            body:dadosRegistro
        })
    } 

    return {getAll, get, add, save}
}