const _ = require ('underscore')
const requestPromise = require('request-promise');
module.exports = function(app)
{
    const CONST_URI_BASE = app.enuns.dados.CONST_URI_BASE; 

    async function getAll(req, res){
        validarRequisicao(req);
        return "GETALL : TOKEN = " + req.query.token;
    }
    
    async function get(req, res){
        validarRequisicao(req);        
        return "GET : TOKEN = " + req.query.token;        
    }

    async function add(req, res){
        validarRequisicao(req);        
        return "ADD : TOKEN = " + req.query.token;           
    }

    async function save(req, res){
        validarRequisicao(req);        
        return "SAVE : TOKEN = " + req.query.token;                
    }
    
    function validarRequisicao(req){
        if(!req.query || !req.query.token) throw new Error("Token é um parametro obrigatório");
    }

    async function obterRegistros(dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}registros?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function obterRegistrosPorId(id, dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}registros/${id}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function addRegistro(dadosRegistros, dadosToken){
        return  await requestPromise({
            method: 'POST',
            uri: `${CONST_URI_BASE}registros/?token=${dadosToken}`,
            json: true,
            body:dadosRegistros
        })
    } 

    async function saveRegistro(dadosRegistros, dadosToken){
        return  await requestPromise({
            method: 'PUT',
            uri: `${CONST_URI_BASE}registros?token=${dadosToken}`,
            json: true,
            body:dadosRegistros
        })
    } 

    return {getAll, get, add, save}
}