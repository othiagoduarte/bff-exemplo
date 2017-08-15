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
    async function obterProdutos(dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}produtos?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function obterProdutoPorId(id, dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}produtos/${id}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function addProduto(dadosCliente, dadosToken){
        return  await requestPromise({
            method: 'POST',
            uri: `${CONST_URI_BASE}produtos/?token=${dadosToken}`,
            json: true,
            body:dadosCliente
        })
    } 

    async function saveProduto(dadosCliente, dadosToken){
        return  await requestPromise({
            method: 'PUT',
            uri: `${CONST_URI_BASE}produtos?token=${dadosToken}`,
            json: true,
            body:dadosCliente
        })
    } 

    return {getAll, get, add, save}
}