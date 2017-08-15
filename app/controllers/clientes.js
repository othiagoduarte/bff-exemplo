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