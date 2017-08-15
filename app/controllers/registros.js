const _ = require ('underscore')
const requestPromise = require('request-promise');
module.exports = function(app)
{
    const CONST_URI_BASE = app.enuns.dados.CONST_FINALIDADE; 

    async function getAll(req, res){
        return "GETALL";
    }
    
    async function get(req, res){
        return "GET";        
    }

    async function add(req, res){
        return "ADD";                
    }

    async function save(req, res){
        return "SAVE";                
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