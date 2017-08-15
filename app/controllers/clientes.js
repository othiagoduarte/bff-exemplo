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

    async function obterClientes(dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}clientes?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function obterClientesPorId(id, dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}clientes/${id}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function addCliente(dadosCliente, dadosToken){
        return  await requestPromise({
            method: 'POST',
            uri: `${CONST_URI_BASE}clientes/?token=${dadosToken}`,
            json: true,
            body:dadosCliente
        })
    } 

    async function saveCliente(dadosCliente, dadosToken){
        return  await requestPromise({
            method: 'PUT',
            uri: `${CONST_URI_BASE}clientes?token=${dadosToken}`,
            json: true,
            body:dadosCliente
        })
    } 

    return {getAll, get, add, save}
}