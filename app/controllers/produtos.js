const _ = require ('underscore')
const requestPromise = require('request-promise');
module.exports = function(app)
{
    const CONST_URI_BASE = app.enuns.dados.CONST_URI_BASE; 

    async function getAll(req, res){
        validarRequisicao(req);
        return await obterProdutos(req.query.token);
    }
    
    async function get(req, res){
        validarRequisicao(req);        
        return await obterProdutoPorId(req.params.id, req.query.token);                
    }

    async function add(req, res){
        validarRequisicao(req);        
        return await addProduto(req.body, req.query.token);                
    }

    async function save(req, res){
        validarRequisicao(req);
        return await saveProduto(req.body, req.query.token);                        
    }

    function validarRequisicao(req){
        if(!req.query || !req.query.token) throw new Error("Token é um parametro obrigatório");
    }

    async function obterProdutos(dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}produtos?token=${dadosToken}`,
            json: true
        })
    } 
    
    async function obterProdutoPorId(id, dadosToken){
        return  await requestPromise({
            method: 'GET',
            uri: `${CONST_URI_BASE}produtos/${id}?token=${dadosToken}`,
            json: true,
        })
    } 
    
    async function addProduto(dadosProduto, dadosToken){
        return  await requestPromise({
            method: 'POST',
            uri: `${CONST_URI_BASE}produtos?token=${dadosToken}`,
            json: true,
            body:dadosProduto
        });
    } 

    async function saveProduto(dadosProduto, dadosToken){
        return  await requestPromise({
            method: 'PUT',
            uri: `${CONST_URI_BASE}produtos?token=${dadosToken}`,
            json: true,
            body:dadosProduto
        })
    }
    return {getAll, get, add, save}
}