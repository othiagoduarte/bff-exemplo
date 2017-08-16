const _ = require ('underscore')
const requestPromise = require('request-promise');
module.exports = function(app)
{
    const CONST_URI_BASE = app.enuns.dados.CONST_URI_BASE; 
    const ctrlToken = app.controllers.token;
    
    async function getAll(req, res){
        validarRequisicao(req);
        return await obterClientes(req.query.token);
    }
    
    async function get(req, res){
        validarRequisicao(req);
        return await obterClientesPorId(req.params.id, req.query.token);        
    }

    async function add(req, res){
        validarRequisicao(req);        
        return await addCliente(req.body, req.query.token);                
    }

    async function save(req, res){
        validarRequisicao(req);
        return await saveCliente(req.body, req.query.token);                        
    }

    async function deletar(req, res){
        validarRequisicao(req);
        if(!req.params || !req.params.id) throw new Error("Código do cliente é um parametro obrigatório");
        return await deletarCliente(req.params.id, req.query.token);                        
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
            uri: `${CONST_URI_BASE}clientes?token=${dadosToken}`,
            json: true,
            body:dadosCliente
        });
    } 

    async function saveCliente(dadosCliente, dadosToken){
        return  await requestPromise({
            method: 'PUT',
            uri: `${CONST_URI_BASE}clientes?token=${dadosToken}`,
            json: true,
            body:dadosCliente
        })
    } 

    async function deletarCliente(id, dadosToken){
        return  await requestPromise({
            method: 'DELETE',
            uri: `${CONST_URI_BASE}clientes/${id}?token=${dadosToken}`,
            json: true,
        })
    } 

    return {getAll, get, add, save, deletar}
}